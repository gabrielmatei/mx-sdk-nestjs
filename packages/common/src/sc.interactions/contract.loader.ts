import { AbiRegistry, Address, SmartContract, SmartContractAbi } from "@elrondnetwork/erdjs/out";
import { Logger } from "@nestjs/common";
import * as fs from "fs";

export class ContractLoader {
  private readonly logger: Logger;
  private readonly abiPath: string;
  private readonly contractInterface: string;
  private abi: SmartContractAbi | undefined = undefined;

  constructor(abiPath: string, contractInterface: string) {
    this.abiPath = abiPath;
    this.contractInterface = contractInterface;

    this.logger = new Logger(ContractLoader.name);
  }

  private async load(): Promise<SmartContractAbi> {
    try {
      const jsonContent: string = await fs.promises.readFile(this.abiPath, { encoding: "utf8" });
      const json = JSON.parse(jsonContent);

      const abiRegistry = AbiRegistry.create(json);

      const abi = new SmartContractAbi(abiRegistry, [this.contractInterface]);

      return abi;
    } catch (error) {
      this.logger.log(`Unexpected error when trying to create smart contract from abi`);
      this.logger.error(error);

      throw new Error('Error when creating contract from abi');
    }
  }

  async getContract(contractAddress: string): Promise<SmartContract> {
    if (!this.abi) {
      this.abi = await this.load();
    }

    return new SmartContract({
      address: new Address(contractAddress),
      abi: this.abi,
    });
  }
}