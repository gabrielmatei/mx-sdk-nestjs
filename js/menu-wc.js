'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Application documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link" >ApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CachingModule.html" data-type="entity-link" >CachingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CachingModule-9cf9128f8285cbeda839491670b41f66d65df58ab5b370e274edc3d6412b2c0bd9fafcbae518a9777eb79aa58d12eb97fbb98ade27ea49e2c64a482fd33a8552"' : 'data-target="#xs-injectables-links-module-CachingModule-9cf9128f8285cbeda839491670b41f66d65df58ab5b370e274edc3d6412b2c0bd9fafcbae518a9777eb79aa58d12eb97fbb98ade27ea49e2c64a482fd33a8552"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CachingModule-9cf9128f8285cbeda839491670b41f66d65df58ab5b370e274edc3d6412b2c0bd9fafcbae518a9777eb79aa58d12eb97fbb98ade27ea49e2c64a482fd33a8552"' :
                                        'id="xs-injectables-links-module-CachingModule-9cf9128f8285cbeda839491670b41f66d65df58ab5b370e274edc3d6412b2c0bd9fafcbae518a9777eb79aa58d12eb97fbb98ade27ea49e2c64a482fd33a8552"' }>
                                        <li class="link">
                                            <a href="injectables/CachingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CachingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalCacheService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalCacheService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ElasticModule.html" data-type="entity-link" >ElasticModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ElrondCachingModule.html" data-type="entity-link" >ElrondCachingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InMemoryCacheModule.html" data-type="entity-link" >InMemoryCacheModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InMemoryCacheModule-1d8ab83681c55cca2167a5d180a6e73eb83ac6f4547d8071ccb3546346f69c8a85f7cc03ba52b7bf50a85ef0575a70088ff2a6a770e4d704e505a9d59353d808"' : 'data-target="#xs-injectables-links-module-InMemoryCacheModule-1d8ab83681c55cca2167a5d180a6e73eb83ac6f4547d8071ccb3546346f69c8a85f7cc03ba52b7bf50a85ef0575a70088ff2a6a770e4d704e505a9d59353d808"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InMemoryCacheModule-1d8ab83681c55cca2167a5d180a6e73eb83ac6f4547d8071ccb3546346f69c8a85f7cc03ba52b7bf50a85ef0575a70088ff2a6a770e4d704e505a9d59353d808"' :
                                        'id="xs-injectables-links-module-InMemoryCacheModule-1d8ab83681c55cca2167a5d180a6e73eb83ac6f4547d8071ccb3546346f69c8a85f7cc03ba52b7bf50a85ef0575a70088ff2a6a770e4d704e505a9d59353d808"' }>
                                        <li class="link">
                                            <a href="injectables/InMemoryCacheService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InMemoryCacheService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggingModule.html" data-type="entity-link" >LoggingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MetricsModule.html" data-type="entity-link" >MetricsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MetricsModule-9d1c66db02989e23c1da61ee1acb33de47f861a60c3be6d42f8b2599b85408eb975a15bd29a48fe7b0a85ba720b560632ca8c9b7f3483644df25351d763131e7"' : 'data-target="#xs-injectables-links-module-MetricsModule-9d1c66db02989e23c1da61ee1acb33de47f861a60c3be6d42f8b2599b85408eb975a15bd29a48fe7b0a85ba720b560632ca8c9b7f3483644df25351d763131e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetricsModule-9d1c66db02989e23c1da61ee1acb33de47f861a60c3be6d42f8b2599b85408eb975a15bd29a48fe7b0a85ba720b560632ca8c9b7f3483644df25351d763131e7"' :
                                        'id="xs-injectables-links-module-MetricsModule-9d1c66db02989e23c1da61ee1acb33de47f861a60c3be6d42f8b2599b85408eb975a15bd29a48fe7b0a85ba720b560632ca8c9b7f3483644df25351d763131e7"' }>
                                        <li class="link">
                                            <a href="injectables/MetricsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetricsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RabbitModule.html" data-type="entity-link" >RabbitModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RabbitModule-396b00c5ccb27494f2230772004aaf3abce8eb8ae0a64899557f24fcf170ce2cf0872e875669387a517ebf7e5075f88f0e7334c5812ae3279d054918f1a5bd3b"' : 'data-target="#xs-injectables-links-module-RabbitModule-396b00c5ccb27494f2230772004aaf3abce8eb8ae0a64899557f24fcf170ce2cf0872e875669387a517ebf7e5075f88f0e7334c5812ae3279d054918f1a5bd3b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RabbitModule-396b00c5ccb27494f2230772004aaf3abce8eb8ae0a64899557f24fcf170ce2cf0872e875669387a517ebf7e5075f88f0e7334c5812ae3279d054918f1a5bd3b"' :
                                        'id="xs-injectables-links-module-RabbitModule-396b00c5ccb27494f2230772004aaf3abce8eb8ae0a64899557f24fcf170ce2cf0872e875669387a517ebf7e5075f88f0e7334c5812ae3279d054918f1a5bd3b"' }>
                                        <li class="link">
                                            <a href="injectables/RabbitContextCheckerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RabbitContextCheckerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RedisCacheModule.html" data-type="entity-link" >RedisCacheModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RedisModule.html" data-type="entity-link" >RedisModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractQuery.html" data-type="entity-link" >AbstractQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccessTokenInfo.html" data-type="entity-link" >AccessTokenInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddressUtils.html" data-type="entity-link" >AddressUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/Amount.html" data-type="entity-link" >Amount</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiModuleOptions.html" data-type="entity-link" >ApiModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiSettings.html" data-type="entity-link" >ApiSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiUtils.html" data-type="entity-link" >ApiUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplyComplexityOptions.html" data-type="entity-link" >ApplyComplexityOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/BatchUtils.html" data-type="entity-link" >BatchUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/BinaryUtils.html" data-type="entity-link" >BinaryUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/CachingModuleOptions.html" data-type="entity-link" >CachingModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComplexityEstimationOptions.html" data-type="entity-link" >ComplexityEstimationOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComplexityExceededException.html" data-type="entity-link" >ComplexityExceededException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComplexityNode.html" data-type="entity-link" >ComplexityNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComplexityTree.html" data-type="entity-link" >ComplexityTree</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComplexityUtils.html" data-type="entity-link" >ComplexityUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/Constants.html" data-type="entity-link" >Constants</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContextTracker.html" data-type="entity-link" >ContextTracker</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContractLoader.html" data-type="entity-link" >ContractLoader</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContractQueryRunner.html" data-type="entity-link" >ContractQueryRunner</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContractTransactionGenerator.html" data-type="entity-link" >ContractTransactionGenerator</a>
                            </li>
                            <li class="link">
                                <a href="classes/CpuProfiler.html" data-type="entity-link" >CpuProfiler</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateUtils.html" data-type="entity-link" >DateUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/DecoratorUtils.html" data-type="entity-link" >DecoratorUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElasticModuleOptions.html" data-type="entity-link" >ElasticModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElasticPagination.html" data-type="entity-link" >ElasticPagination</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElasticQuery.html" data-type="entity-link" >ElasticQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElasticSortProperty.html" data-type="entity-link" >ElasticSortProperty</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExistsQuery.html" data-type="entity-link" >ExistsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileUtils.html" data-type="entity-link" >FileUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocalCacheValue.html" data-type="entity-link" >LocalCacheValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/Locker.html" data-type="entity-link" >Locker</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggerInitializer.html" data-type="entity-link" >LoggerInitializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/MatchQuery.html" data-type="entity-link" >MatchQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/MatchUtils.html" data-type="entity-link" >MatchUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/MustQuery.html" data-type="entity-link" >MustQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/NativeAuthSigner.html" data-type="entity-link" >NativeAuthSigner</a>
                            </li>
                            <li class="link">
                                <a href="classes/NativeAuthSignerConfig.html" data-type="entity-link" >NativeAuthSignerConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedQuery.html" data-type="entity-link" >NestedQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoAuthOptions.html" data-type="entity-link" >NoAuthOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoCacheOptions.html" data-type="entity-link" >NoCacheOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumberUtils.html" data-type="entity-link" >NumberUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/OriginLogger.html" data-type="entity-link" >OriginLogger</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationInterceptor.html" data-type="entity-link" >PaginationInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParentNodeNotFoundException.html" data-type="entity-link" >ParentNodeNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseAddressAndMetachainPipe.html" data-type="entity-link" >ParseAddressAndMetachainPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseAddressArrayPipe.html" data-type="entity-link" >ParseAddressArrayPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseAddressPipe.html" data-type="entity-link" >ParseAddressPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseArrayPipe.html" data-type="entity-link" >ParseArrayPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseBlockHashPipe.html" data-type="entity-link" >ParseBlockHashPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseBlsHashPipe.html" data-type="entity-link" >ParseBlsHashPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseBoolPipe.html" data-type="entity-link" >ParseBoolPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseCollectionPipe.html" data-type="entity-link" >ParseCollectionPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseEnumArrayPipe.html" data-type="entity-link" >ParseEnumArrayPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseEnumPipe.html" data-type="entity-link" >ParseEnumPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseHashArrayPipe.html" data-type="entity-link" >ParseHashArrayPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseHashPipe.html" data-type="entity-link" >ParseHashPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseIntPipe.html" data-type="entity-link" >ParseIntPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseNftPipe.html" data-type="entity-link" >ParseNftPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseRecordPipe.html" data-type="entity-link" >ParseRecordPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseRegexPipe.html" data-type="entity-link" >ParseRegexPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseTokenOrNftPipe.html" data-type="entity-link" >ParseTokenOrNftPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseTokenPipe.html" data-type="entity-link" >ParseTokenPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseTranasctionHashArrayPipe.html" data-type="entity-link" >ParseTranasctionHashArrayPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParseTransactionHashPipe.html" data-type="entity-link" >ParseTransactionHashPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/PendingExecuter.html" data-type="entity-link" >PendingExecuter</a>
                            </li>
                            <li class="link">
                                <a href="classes/PerformanceProfiler.html" data-type="entity-link" >PerformanceProfiler</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryCondition.html" data-type="entity-link" >QueryCondition</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryRange.html" data-type="entity-link" >QueryRange</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryType.html" data-type="entity-link" >QueryType</a>
                            </li>
                            <li class="link">
                                <a href="classes/RabbitModuleOptions.html" data-type="entity-link" >RabbitModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/RangeGreaterThan.html" data-type="entity-link" >RangeGreaterThan</a>
                            </li>
                            <li class="link">
                                <a href="classes/RangeGreaterThanOrEqual.html" data-type="entity-link" >RangeGreaterThanOrEqual</a>
                            </li>
                            <li class="link">
                                <a href="classes/RangeLowerThan.html" data-type="entity-link" >RangeLowerThan</a>
                            </li>
                            <li class="link">
                                <a href="classes/RangeLowerThanOrEqual.html" data-type="entity-link" >RangeLowerThanOrEqual</a>
                            </li>
                            <li class="link">
                                <a href="classes/RangeQuery.html" data-type="entity-link" >RangeQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecordUtils.html" data-type="entity-link" >RecordUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/RedisCacheModuleOptions.html" data-type="entity-link" >RedisCacheModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoundUtils.html" data-type="entity-link" >RoundUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShouldQuery.html" data-type="entity-link" >ShouldQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringQuery.html" data-type="entity-link" >StringQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringUtils.html" data-type="entity-link" >StringUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/SwaggerUtils.html" data-type="entity-link" >SwaggerUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/TermsQuery.html" data-type="entity-link" >TermsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenUtils.html" data-type="entity-link" >TokenUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/WildcardQuery.html" data-type="entity-link" >WildcardQuery</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CachingInterceptor.html" data-type="entity-link" >CachingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CleanupInterceptor.html" data-type="entity-link" >CleanupInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComplexityInterceptor.html" data-type="entity-link" >ComplexityInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ElasticService.html" data-type="entity-link" >ElasticService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ElrondCachingService.html" data-type="entity-link" >ElrondCachingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExtractInterceptor.html" data-type="entity-link" >ExtractInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FieldsInterceptor.html" data-type="entity-link" >FieldsInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GuestCachingInterceptor.html" data-type="entity-link" >GuestCachingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GuestCachingService.html" data-type="entity-link" >GuestCachingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GuestCachingWarmer.html" data-type="entity-link" >GuestCachingWarmer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogRequestsInterceptor.html" data-type="entity-link" >LogRequestsInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OriginInterceptor.html" data-type="entity-link" >OriginInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueryCheckInterceptor.html" data-type="entity-link" >QueryCheckInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RabbitMqConsumerMonitoringInterceptor.html" data-type="entity-link" >RabbitMqConsumerMonitoringInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RabbitPublisherService.html" data-type="entity-link" >RabbitPublisherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RedisCacheService.html" data-type="entity-link" >RedisCacheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestCpuTimeInterceptor.html" data-type="entity-link" >RequestCpuTimeInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtAdminGuard.html" data-type="entity-link" >JwtAdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/JwtAuthenticateGlobalGuard.html" data-type="entity-link" >JwtAuthenticateGlobalGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/JwtAuthenticateGuard.html" data-type="entity-link" >JwtAuthenticateGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/JwtOrNativeAuthGuard.html" data-type="entity-link" >JwtOrNativeAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NativeAuthGuard.html" data-type="entity-link" >NativeAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApiModuleAsyncOptions.html" data-type="entity-link" >ApiModuleAsyncOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Array.html" data-type="entity-link" >Array</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CachingModuleAsyncOptions.html" data-type="entity-link" >CachingModuleAsyncOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Date.html" data-type="entity-link" >Date</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ElasticModuleAsyncOptions.html" data-type="entity-link" >ElasticModuleAsyncOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErdnestConfigService.html" data-type="entity-link" >ErdnestConfigService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IErrorLoggerOptions.html" data-type="entity-link" >IErrorLoggerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGuestCacheEntity.html" data-type="entity-link" >IGuestCacheEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGuestCacheOptions.html" data-type="entity-link" >IGuestCacheOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGuestCacheWarmerOptions.html" data-type="entity-link" >IGuestCacheWarmerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LockOptions.html" data-type="entity-link" >LockOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Matchers.html" data-type="entity-link" >Matchers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Number.html" data-type="entity-link" >Number</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RabbitConsumerConfig.html" data-type="entity-link" >RabbitConsumerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RabbitModuleAsyncOptions.html" data-type="entity-link" >RabbitModuleAsyncOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RedisCacheModuleAsyncOptions.html" data-type="entity-link" >RedisCacheModuleAsyncOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RedisModuleAsyncOptions.html" data-type="entity-link" >RedisModuleAsyncOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RedisModuleOptions.html" data-type="entity-link" >RedisModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RedisModuleOptionsFactory.html" data-type="entity-link" >RedisModuleOptionsFactory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/String.html" data-type="entity-link" >String</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});