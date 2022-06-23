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
                    <a href="index.html" data-type="index-link">nestjs documentation</a>
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
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-cf2bc514ea16631104cc83b0d3b05982fb457a2e914930f7df34c3eb72ef53faa72e0cfacba83d11d238fc35d8b5bb774056e231c53968c04cc6de12153f9523"' : 'data-target="#xs-controllers-links-module-AppModule-cf2bc514ea16631104cc83b0d3b05982fb457a2e914930f7df34c3eb72ef53faa72e0cfacba83d11d238fc35d8b5bb774056e231c53968c04cc6de12153f9523"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-cf2bc514ea16631104cc83b0d3b05982fb457a2e914930f7df34c3eb72ef53faa72e0cfacba83d11d238fc35d8b5bb774056e231c53968c04cc6de12153f9523"' :
                                            'id="xs-controllers-links-module-AppModule-cf2bc514ea16631104cc83b0d3b05982fb457a2e914930f7df34c3eb72ef53faa72e0cfacba83d11d238fc35d8b5bb774056e231c53968c04cc6de12153f9523"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-cf2bc514ea16631104cc83b0d3b05982fb457a2e914930f7df34c3eb72ef53faa72e0cfacba83d11d238fc35d8b5bb774056e231c53968c04cc6de12153f9523"' : 'data-target="#xs-injectables-links-module-AppModule-cf2bc514ea16631104cc83b0d3b05982fb457a2e914930f7df34c3eb72ef53faa72e0cfacba83d11d238fc35d8b5bb774056e231c53968c04cc6de12153f9523"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cf2bc514ea16631104cc83b0d3b05982fb457a2e914930f7df34c3eb72ef53faa72e0cfacba83d11d238fc35d8b5bb774056e231c53968c04cc6de12153f9523"' :
                                        'id="xs-injectables-links-module-AppModule-cf2bc514ea16631104cc83b0d3b05982fb457a2e914930f7df34c3eb72ef53faa72e0cfacba83d11d238fc35d8b5bb774056e231c53968c04cc6de12153f9523"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-b7dd5cd80143ac86dc99177f9e06b18cc90e85983e7935572ef102448c6a674d86d0956763e8246439fdd005208f86f35e88588f8a96f2d35d715d1051cef8a0"' : 'data-target="#xs-controllers-links-module-AuthModule-b7dd5cd80143ac86dc99177f9e06b18cc90e85983e7935572ef102448c6a674d86d0956763e8246439fdd005208f86f35e88588f8a96f2d35d715d1051cef8a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b7dd5cd80143ac86dc99177f9e06b18cc90e85983e7935572ef102448c6a674d86d0956763e8246439fdd005208f86f35e88588f8a96f2d35d715d1051cef8a0"' :
                                            'id="xs-controllers-links-module-AuthModule-b7dd5cd80143ac86dc99177f9e06b18cc90e85983e7935572ef102448c6a674d86d0956763e8246439fdd005208f86f35e88588f8a96f2d35d715d1051cef8a0"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-b7dd5cd80143ac86dc99177f9e06b18cc90e85983e7935572ef102448c6a674d86d0956763e8246439fdd005208f86f35e88588f8a96f2d35d715d1051cef8a0"' : 'data-target="#xs-injectables-links-module-AuthModule-b7dd5cd80143ac86dc99177f9e06b18cc90e85983e7935572ef102448c6a674d86d0956763e8246439fdd005208f86f35e88588f8a96f2d35d715d1051cef8a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b7dd5cd80143ac86dc99177f9e06b18cc90e85983e7935572ef102448c6a674d86d0956763e8246439fdd005208f86f35e88588f8a96f2d35d715d1051cef8a0"' :
                                        'id="xs-injectables-links-module-AuthModule-b7dd5cd80143ac86dc99177f9e06b18cc90e85983e7935572ef102448c6a674d86d0956763e8246439fdd005208f86f35e88588f8a96f2d35d715d1051cef8a0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GameModule-58b1d949aa0329ff52d89af7a71e8d9de89110eca38dc74f78b3079d4eef35a4e69cfc8580fd10bbe0a66eb477645896b4291000d9453be1c14aae276622238b"' : 'data-target="#xs-controllers-links-module-GameModule-58b1d949aa0329ff52d89af7a71e8d9de89110eca38dc74f78b3079d4eef35a4e69cfc8580fd10bbe0a66eb477645896b4291000d9453be1c14aae276622238b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GameModule-58b1d949aa0329ff52d89af7a71e8d9de89110eca38dc74f78b3079d4eef35a4e69cfc8580fd10bbe0a66eb477645896b4291000d9453be1c14aae276622238b"' :
                                            'id="xs-controllers-links-module-GameModule-58b1d949aa0329ff52d89af7a71e8d9de89110eca38dc74f78b3079d4eef35a4e69cfc8580fd10bbe0a66eb477645896b4291000d9453be1c14aae276622238b"' }>
                                            <li class="link">
                                                <a href="controllers/GameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameModule-58b1d949aa0329ff52d89af7a71e8d9de89110eca38dc74f78b3079d4eef35a4e69cfc8580fd10bbe0a66eb477645896b4291000d9453be1c14aae276622238b"' : 'data-target="#xs-injectables-links-module-GameModule-58b1d949aa0329ff52d89af7a71e8d9de89110eca38dc74f78b3079d4eef35a4e69cfc8580fd10bbe0a66eb477645896b4291000d9453be1c14aae276622238b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameModule-58b1d949aa0329ff52d89af7a71e8d9de89110eca38dc74f78b3079d4eef35a4e69cfc8580fd10bbe0a66eb477645896b4291000d9453be1c14aae276622238b"' :
                                        'id="xs-injectables-links-module-GameModule-58b1d949aa0329ff52d89af7a71e8d9de89110eca38dc74f78b3079d4eef35a4e69cfc8580fd10bbe0a66eb477645896b4291000d9453be1c14aae276622238b"' }>
                                        <li class="link">
                                            <a href="injectables/GameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenderModule.html" data-type="entity-link" >GenderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GenderModule-a1913f1fc9fec6aea4ab490941b918408ec95c84363fc5971a6fbc1076a8a81836625cc69c7bf65a0b8ec0de105df632b83446ead2ff54114c42c1b426e8b8e9"' : 'data-target="#xs-controllers-links-module-GenderModule-a1913f1fc9fec6aea4ab490941b918408ec95c84363fc5971a6fbc1076a8a81836625cc69c7bf65a0b8ec0de105df632b83446ead2ff54114c42c1b426e8b8e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GenderModule-a1913f1fc9fec6aea4ab490941b918408ec95c84363fc5971a6fbc1076a8a81836625cc69c7bf65a0b8ec0de105df632b83446ead2ff54114c42c1b426e8b8e9"' :
                                            'id="xs-controllers-links-module-GenderModule-a1913f1fc9fec6aea4ab490941b918408ec95c84363fc5971a6fbc1076a8a81836625cc69c7bf65a0b8ec0de105df632b83446ead2ff54114c42c1b426e8b8e9"' }>
                                            <li class="link">
                                                <a href="controllers/GenderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GenderModule-a1913f1fc9fec6aea4ab490941b918408ec95c84363fc5971a6fbc1076a8a81836625cc69c7bf65a0b8ec0de105df632b83446ead2ff54114c42c1b426e8b8e9"' : 'data-target="#xs-injectables-links-module-GenderModule-a1913f1fc9fec6aea4ab490941b918408ec95c84363fc5971a6fbc1076a8a81836625cc69c7bf65a0b8ec0de105df632b83446ead2ff54114c42c1b426e8b8e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GenderModule-a1913f1fc9fec6aea4ab490941b918408ec95c84363fc5971a6fbc1076a8a81836625cc69c7bf65a0b8ec0de105df632b83446ead2ff54114c42c1b426e8b8e9"' :
                                        'id="xs-injectables-links-module-GenderModule-a1913f1fc9fec6aea4ab490941b918408ec95c84363fc5971a6fbc1076a8a81836625cc69c7bf65a0b8ec0de105df632b83446ead2ff54114c42c1b426e8b8e9"' }>
                                        <li class="link">
                                            <a href="injectables/GenderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HomePageModule-1e044f8ec6c935ce16fd1a079bf58631b4bd485b92fa90e169f676314eec11f14fc1757973c52fac72bc205661fea43ee2a1671f6ec85898e95dbffa82e59c08"' : 'data-target="#xs-controllers-links-module-HomePageModule-1e044f8ec6c935ce16fd1a079bf58631b4bd485b92fa90e169f676314eec11f14fc1757973c52fac72bc205661fea43ee2a1671f6ec85898e95dbffa82e59c08"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HomePageModule-1e044f8ec6c935ce16fd1a079bf58631b4bd485b92fa90e169f676314eec11f14fc1757973c52fac72bc205661fea43ee2a1671f6ec85898e95dbffa82e59c08"' :
                                            'id="xs-controllers-links-module-HomePageModule-1e044f8ec6c935ce16fd1a079bf58631b4bd485b92fa90e169f676314eec11f14fc1757973c52fac72bc205661fea43ee2a1671f6ec85898e95dbffa82e59c08"' }>
                                            <li class="link">
                                                <a href="controllers/HomePageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomePageModule-1e044f8ec6c935ce16fd1a079bf58631b4bd485b92fa90e169f676314eec11f14fc1757973c52fac72bc205661fea43ee2a1671f6ec85898e95dbffa82e59c08"' : 'data-target="#xs-injectables-links-module-HomePageModule-1e044f8ec6c935ce16fd1a079bf58631b4bd485b92fa90e169f676314eec11f14fc1757973c52fac72bc205661fea43ee2a1671f6ec85898e95dbffa82e59c08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomePageModule-1e044f8ec6c935ce16fd1a079bf58631b4bd485b92fa90e169f676314eec11f14fc1757973c52fac72bc205661fea43ee2a1671f6ec85898e95dbffa82e59c08"' :
                                        'id="xs-injectables-links-module-HomePageModule-1e044f8ec6c935ce16fd1a079bf58631b4bd485b92fa90e169f676314eec11f14fc1757973c52fac72bc205661fea43ee2a1671f6ec85898e95dbffa82e59c08"' }>
                                        <li class="link">
                                            <a href="injectables/HomePageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-801f7489231914d7ba90816f6628b60b98a2faffcc8ab8b6c1ef5ba995bd7a8ca935f4534fd607e1be9c65ebfea20da21fc5d21b71239b2ec94efd1a8a61748e"' : 'data-target="#xs-injectables-links-module-PrismaModule-801f7489231914d7ba90816f6628b60b98a2faffcc8ab8b6c1ef5ba995bd7a8ca935f4534fd607e1be9c65ebfea20da21fc5d21b71239b2ec94efd1a8a61748e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-801f7489231914d7ba90816f6628b60b98a2faffcc8ab8b6c1ef5ba995bd7a8ca935f4534fd607e1be9c65ebfea20da21fc5d21b71239b2ec94efd1a8a61748e"' :
                                        'id="xs-injectables-links-module-PrismaModule-801f7489231914d7ba90816f6628b60b98a2faffcc8ab8b6c1ef5ba995bd7a8ca935f4534fd607e1be9c65ebfea20da21fc5d21b71239b2ec94efd1a8a61748e"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-ae6049450988987168fc5604e0c5070ff53026101265792c2baa801508b70e2a6e4d937bf395a9be5d1f70a0f6d17db3bfe24e8d2ec3be315a56f1a6583ea4f1"' : 'data-target="#xs-controllers-links-module-ProfileModule-ae6049450988987168fc5604e0c5070ff53026101265792c2baa801508b70e2a6e4d937bf395a9be5d1f70a0f6d17db3bfe24e8d2ec3be315a56f1a6583ea4f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-ae6049450988987168fc5604e0c5070ff53026101265792c2baa801508b70e2a6e4d937bf395a9be5d1f70a0f6d17db3bfe24e8d2ec3be315a56f1a6583ea4f1"' :
                                            'id="xs-controllers-links-module-ProfileModule-ae6049450988987168fc5604e0c5070ff53026101265792c2baa801508b70e2a6e4d937bf395a9be5d1f70a0f6d17db3bfe24e8d2ec3be315a56f1a6583ea4f1"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-ae6049450988987168fc5604e0c5070ff53026101265792c2baa801508b70e2a6e4d937bf395a9be5d1f70a0f6d17db3bfe24e8d2ec3be315a56f1a6583ea4f1"' : 'data-target="#xs-injectables-links-module-ProfileModule-ae6049450988987168fc5604e0c5070ff53026101265792c2baa801508b70e2a6e4d937bf395a9be5d1f70a0f6d17db3bfe24e8d2ec3be315a56f1a6583ea4f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-ae6049450988987168fc5604e0c5070ff53026101265792c2baa801508b70e2a6e4d937bf395a9be5d1f70a0f6d17db3bfe24e8d2ec3be315a56f1a6583ea4f1"' :
                                        'id="xs-injectables-links-module-ProfileModule-ae6049450988987168fc5604e0c5070ff53026101265792c2baa801508b70e2a6e4d937bf395a9be5d1f70a0f6d17db3bfe24e8d2ec3be315a56f1a6583ea4f1"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-e94a708fbc677510808f63370de9ece1c0ad908fdb7c4b74f5ebcf02e2f84bb7a617cda2ed9b97fdec6e8a1c681cdcf513b5c269bbda4db2d280d84e44f19a08"' : 'data-target="#xs-controllers-links-module-UserModule-e94a708fbc677510808f63370de9ece1c0ad908fdb7c4b74f5ebcf02e2f84bb7a617cda2ed9b97fdec6e8a1c681cdcf513b5c269bbda4db2d280d84e44f19a08"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-e94a708fbc677510808f63370de9ece1c0ad908fdb7c4b74f5ebcf02e2f84bb7a617cda2ed9b97fdec6e8a1c681cdcf513b5c269bbda4db2d280d84e44f19a08"' :
                                            'id="xs-controllers-links-module-UserModule-e94a708fbc677510808f63370de9ece1c0ad908fdb7c4b74f5ebcf02e2f84bb7a617cda2ed9b97fdec6e8a1c681cdcf513b5c269bbda4db2d280d84e44f19a08"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-e94a708fbc677510808f63370de9ece1c0ad908fdb7c4b74f5ebcf02e2f84bb7a617cda2ed9b97fdec6e8a1c681cdcf513b5c269bbda4db2d280d84e44f19a08"' : 'data-target="#xs-injectables-links-module-UserModule-e94a708fbc677510808f63370de9ece1c0ad908fdb7c4b74f5ebcf02e2f84bb7a617cda2ed9b97fdec6e8a1c681cdcf513b5c269bbda4db2d280d84e44f19a08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e94a708fbc677510808f63370de9ece1c0ad908fdb7c4b74f5ebcf02e2f84bb7a617cda2ed9b97fdec6e8a1c681cdcf513b5c269bbda4db2d280d84e44f19a08"' :
                                        'id="xs-injectables-links-module-UserModule-e94a708fbc677510808f63370de9ece1c0ad908fdb7c4b74f5ebcf02e2f84bb7a617cda2ed9b97fdec6e8a1c681cdcf513b5c269bbda4db2d280d84e44f19a08"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GameController.html" data-type="entity-link" >GameController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GenderController.html" data-type="entity-link" >GenderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HomePageController.html" data-type="entity-link" >HomePageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link" >ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
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
                                <a href="classes/addGameByProfile.html" data-type="entity-link" >addGameByProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGameDto.html" data-type="entity-link" >CreateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGenderDto.html" data-type="entity-link" >CreateGenderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genders.html" data-type="entity-link" >Genders</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameDto.html" data-type="entity-link" >UpdateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGenderDto.html" data-type="entity-link" >UpdateGenderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileDto.html" data-type="entity-link" >UpdateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link" >Users</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenderService.html" data-type="entity-link" >GenderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomePageService.html" data-type="entity-link" >HomePageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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