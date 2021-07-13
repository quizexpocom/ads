var PREBID_TIMEOUT = 1e3,
    FAILSAFE_TIMEOUT = 3e3,
    adUnits = [
        {
            code: "div-gpt-ad-quiz-top",
            mediaTypes: { banner: { sizes: [[728, 90]] } },
            labelAny: ["display", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65269" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-middle",
            mediaTypes: { banner: { sizes: [[728, 90]] } },
            labelAny: ["display", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65269" } },
		{ bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-bottom",
            mediaTypes: { banner: { sizes: [[728, 90]] } },
            labelAny: ["display", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65269" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-left-sidebar",
            mediaTypes: { banner: { sizes: [[300, 600]] } },
            labelAny: ["display"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65267" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-left-sidebar",
            mediaTypes: { banner: { sizes: [[160, 600]] } },
            labelAny: ["display"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65268" } },
		{ bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },    
            ],
        },
        {
            code: "div-gpt-ad-quiz-right-sidebar",
            mediaTypes: { banner: { sizes: [[300, 600]] } },
            labelAny: ["display"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65267" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-right-sidebar",
            mediaTypes: { banner: { sizes: [[160, 600]] } },
            labelAny: ["display"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65268" } },
		{ bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } }    
            ],
        },
        {
            code: "div-gpt-ad-quiz-mobile-top",
            mediaTypes: { banner: { sizes: [[300, 250]] } },
            labelAny: ["phone", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65266" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-mobile-top",
            mediaTypes: { banner: { sizes: [[336, 280]] } },
            labelAny: ["phone", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65266" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-mobile-middle",
            mediaTypes: { banner: { sizes: [[300, 250]] } },
            labelAny: ["phone", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65266" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-mobile-middle",
            mediaTypes: { banner: { sizes: [[336, 280]] } },
            labelAny: ["phone", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65266" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-mobile-bottom",
            mediaTypes: { banner: { sizes: [[300, 250]] } },
            labelAny: ["phone", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65266" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-mobile-bottom",
            mediaTypes: { banner: { sizes: [[336, 280]] } },
            labelAny: ["phone", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65266" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-sticky-top",
            mediaTypes: { banner: { sizes: [[320, 50]] } },
            labelAny: ["phone"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65273" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-sticky-top",
            mediaTypes: { banner: { sizes: [[320, 100]] } },
            labelAny: ["phone"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65272" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-sticky-top",
            mediaTypes: { banner: { sizes: [[728, 90]] } },
            labelAny: ["display", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65269" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-sticky-bottom",
            mediaTypes: { banner: { sizes: [[320, 50]] } },
            labelAny: ["phone"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65273" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-sticky-bottom",
            mediaTypes: { banner: { sizes: [[320, 100]] } },
            labelAny: ["phone"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65272" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
        {
            code: "div-gpt-ad-quiz-sticky-bottom",
            mediaTypes: { banner: { sizes: [[728, 90]] } },
            labelAny: ["display", "tablet"],
            bids: [
                { bidder: "appnexus", params: { placementId: "20168126", allowSmallerSizes: !0 } },
                { bidder: "rtbhouse", params: { region: "prebid-us", publisherId: "REFLe3rXfcTXAAqzSUwD" } },
                { bidder: "onetag", params: { pubId: "5adaad445a0a050" } },
                { bidder: "smartadserver", params: { siteId: "218825", pageId: "1304080", formatId: "65269" } },
                { bidder: "adagio", params: { organizationId: "1048", site: "hooliganmedia-com" } },
                { bidder: "rubicon", params: { accountId: "15410", siteId: "96324", zoneId: "2042326" } },
            ],
        },
    ];
   const customConfigObject = { buckets: [{ precision: 2, min: 0, max: 30, increment: 0.01 }] };
   var topQuiz,
    middleQuiz,
    bottomQuiz,
    leftSidebar,
    rightSidebar,
    topMobile,
    middleMobile,
    bottomMobile,
    topSticky,
    bottomSticky,
	pbjs = pbjs || {};
function initAdserver() {
    pbjs.initAdserverSet ||
        ((pbjs.initAdserverSet = !0),
        googletag.cmd.push(function () {
            pbjs.que.push(function () {
                pbjs.setTargetingForGPTAsync(), googletag.pubads().refresh();
            });
        }));
}
(pbjs.que = pbjs.que || []),
    pbjs.setConfig({
        debug: !1,
        sizeConfig: [
            {
                mediaQuery: "(min-width: 991px)",
                sizesSupported: [
                    [970, 90],
                    [970, 90],
                    [728, 90],
                    [300, 250],
                    [300, 600],
                    [336, 280],
                    [160, 600],
                ],
                labels: ["display"],
            },
            {
                mediaQuery: "(min-width: 768px) and (max-width: 990px)",
                sizesSupported: [
                    [728, 90],
                    [300, 250],
                    [336, 280],
                    [160, 600],
                ],
                labels: ["tablet"],
            },
            {
                mediaQuery: "(min-width: 320px) and (max-width: 767px)",
                sizesSupported: [
                    [320, 50],
                    [320, 100],
                    [300, 250],
                ],
                labels: ["phone"],
            },
        ],
        priceGranularity: customConfigObject,
        userSync: { iframeEnabled: !0 },
    }),
    pbjs.onEvent("bidWon", function (e) {}),
    pbjs.que.push(function () {
        pbjs.addAdUnits(adUnits), pbjs.requestBids({ bidsBackHandler: initAdserver, timeout: PREBID_TIMEOUT });
    }),
    setTimeout(function () {
        initAdserver();
    }, FAILSAFE_TIMEOUT),
    (window.googletag = window.googletag || { cmd: [] }),
    googletag.cmd.push(function () {
        var e = googletag
                .sizeMapping()
                .addSize(
                    [768, 0],
                    [
                        [728, 90],
                        [468, 60],
                    ]
                )
                .addSize(
                    [320, 0],
                    [
                        [320, 50],
                        [320, 100],
                        [300, 50],
                    ]
                )
                .addSize([0, 0], [])
                .build(),
            a = googletag
                .sizeMapping()
                .addSize(
                    [991, 0],
                    [
                        [300, 600],
                        [160, 600],
                        [120, 600],
                    ]
                )
                .addSize([0, 0], [])
                .build(),
            d = googletag
                .sizeMapping()
                .addSize(
                    [768, 0],
                    [
                        [300, 250],
                        [336, 280],
                        [250, 250],
                        [200, 200],
                    ]
                )
                .addSize(
                    [320, 0],
                    [
                        [300, 250],
                        [250, 250],
                        [200, 200],
                    ]
                )
                .addSize([0, 0], [])
                .build(),
            i = googletag
                .sizeMapping()
                .addSize(
                    [768, 0],
                    [
                        [728, 90],
                        [468, 80],
                    ]
                )
                .addSize(
                    [320, 0],
                    [
                        [320, 50],
                        [320, 100],
                    ]
                )
                .addSize([0, 0], [])
                .build();
        (topQuiz = googletag.defineSlot("/115975610/quizexpo-hm", [728, 90], "div-gpt-ad-quiz-top").defineSizeMapping(e).setTargeting("site", ["quizexpo"]).setTargeting("pos", ["quiz-top"]).addService(googletag.pubads())),
            (middleQuiz = googletag.defineSlot("/115975610/quizexpo-hm", [728, 90], "div-gpt-ad-quiz-middle").defineSizeMapping(e).setTargeting("site", ["quizexpo"]).setTargeting("pos", ["quiz-middle"]).addService(googletag.pubads())),
            (bottomQuiz = googletag.defineSlot("/115975610/quizexpo-hm", [728, 90], "div-gpt-ad-quiz-bottom").defineSizeMapping(e).setTargeting("site", ["quizexpo"]).setTargeting("pos", ["quiz-middle"]).addService(googletag.pubads())),
            (leftSidebar = googletag
                .defineSlot("/115975610/quizexpo-hm", [160, 600], "div-gpt-ad-quiz-left-sidebar")
                .defineSizeMapping(a)
                .setTargeting("site", ["quizexpo"])
                .setTargeting("pos", ["quiz-left-sidebar"])
                .addService(googletag.pubads())),
            (rightSidebar = googletag
                .defineSlot("/115975610/quizexpo-hm", [160, 600], "div-gpt-ad-quiz-right-sidebar")
                .defineSizeMapping(a)
                .setTargeting("site", ["quizexpo"])
                .setTargeting("pos", ["quiz-right-sidebar"])
                .addService(googletag.pubads())),
            (topMobile = googletag
                .defineSlot("/115975610/quizexpo-hm", [320, 50], "div-gpt-ad-quiz-mobile-top")
                .defineSizeMapping(d)
                .setTargeting("site", ["quizexpo"])
                .setTargeting("pos", ["quiz-mobile-top"])
                .addService(googletag.pubads())),
            (middleMobile = googletag
                .defineSlot("/115975610/quizexpo-hm", [300, 250], "div-gpt-ad-quiz-mobile-middle")
                .defineSizeMapping(d)
                .setTargeting("site", ["quizexpo"])
                .setTargeting("pos", ["quiz-mobile-middle"])
                .addService(googletag.pubads())),
            (bottomMobile = googletag
                .defineSlot("/115975610/quizexpo-hm", [300, 250], "div-gpt-ad-quiz-mobile-bottom")
                .defineSizeMapping(d)
                .setTargeting("site", ["quizexpo"])
                .setTargeting("pos", ["quiz-mobile-bottom"])
                .addService(googletag.pubads())),
            (topSticky = googletag
                .defineSlot("/115975610/quizexpo-hm", [320, 50], "div-gpt-ad-quiz-sticky-top")
                .defineSizeMapping(i)
                .setTargeting("site", ["quizexpo"])
                .setTargeting("pos", ["quiz-sticky-top"])
                .addService(googletag.pubads())),
            (bottomSticky = googletag
                .defineSlot("/115975610/quizexpo-hm", [320, 50], "div-gpt-ad-quiz-sticky-bottom")
                .defineSizeMapping(i)
                .setTargeting("site", ["quizexpo"])
                .setTargeting("pos", ["quiz-sticky-bottom"])
                .addService(googletag.pubads())),
            googletag.pubads().enableLazyLoad({ fetchMarginPercent: 200, renderMarginPercent: 100, mobileScaling: 1.5 }),
            googletag.pubads().addEventListener("impressionViewable", function (e) {
                var a = e.slot;
                setTimeout(function () {
                    googletag.pubads().refresh([a]);
                }, 15e3);
            }),
            googletag.pubads().collapseEmptyDivs(),
            googletag.pubads().disableInitialLoad(),
            googletag.enableServices();
    });
