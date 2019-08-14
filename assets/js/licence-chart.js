
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function initOnReady() {
// 			  var widget = new TradingView.widget({
// 					width: '100%',
// 					height: 500,
// 					symbol: 'BTCIRT',
// 					library_path: '/cdn/charting_library/',
// 					datafeed: new Datafeeds.UDFCompatibleDatafeed("https://api.nobitex1.ir/" + 'market/udf', 10000000),
// 					interval: "720",
// 					timezone: "Asia/Tehran",
// 					timeframe: "D",
// 					theme: "Light",
// 					style: "1",
// 					custom_css_url: "style.css",
// 					// locale: this.locale,
// 					toolbar_bg: "#f1f3f6",
// 					enable_publishing: false,
// 					allow_symbol_change: false,
// 					hideideas: true,
// 					disabled_features: ["use_localstorage_for_settings", "volume_force_overlay"],
// 					enabled_features: ["move_logo_to_main_pane", "study_templates"],
// 					charts_storage_url: 'https://saveload.tradingview.com',
// 					charts_storage_api_version: "1.1",
// 					withdateranges: true,
// 					time_frames: [
// 						{ "text": "1d", "resolution": "60" },
// 						{ "text": "1w", "resolution": "1D" },
// //          { "text": "2w", "resolution": "60" },
// //          { "text": "1m", "resolution": "1D" },
// //          { "text": "3m", "resolution": "1D" },
// //          { "text": "1000y", "resolution": "1D", "title": "All" }
// 					],
// 					overrides: {
// 						"paneProperties.topMargin": 10
// 					},
// 					debug: false,
// 				});

    var widget = new TradingView.widget({
        width: '100%',
        height: 500,
        symbol: 'BTCIRT',
        interval: '720',
        library_path: '/cdn/charting_library/',
        timezone: "Asia/Tehran",
        timeframe: "D",
        theme: "Light",
        style: "1",
        custom_css_url: "style.css",
// 					// locale: this.locale,
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: false,
        hideideas: true,
        disabled_features: ["use_localstorage_for_settings", "volume_force_overlay"],
        enabled_features: ["move_logo_to_main_pane", "study_templates"],
        charts_storage_url: 'https://saveload.tradingview.com',
        charts_storage_api_version: "1.1",
        withdateranges: true,
        time_frames: [
            { "text": "1d", "resolution": "60" },
            { "text": "1w", "resolution": "1D" },
//          { "text": "2w", "resolution": "60" },
//          { "text": "1m", "resolution": "1D" },
//          { "text": "3m", "resolution": "1D" },
//          { "text": "1000y", "resolution": "1D", "title": "All" }
        ],
        overrides: {
            "paneProperties.topMargin": 10
        },
        debug: false,



        container_id: "tv_chart_container",
        //	BEWARE: no trailing slash is expected in feed URL
        // datafeed: new Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
        datafeed: new window.Datafeeds.UDFCompatibleDatafeed("https://api.nobitex1.ir/" + 'market/udf', 10000000),
        library_path: "charting_library/",
        // locale: getParameterByName('lang') || "en",

        disabled_features: ["use_localstorage_for_settings"],
        // preset: "mobile",
        // overrides: {
        // 	"paneProperties.background": "#222222",
        // 	"paneProperties.vertGridProperties.color": "#454545",
        // 	"paneProperties.horzGridProperties.color": "#454545",
        // 	"symbolWatermarkProperties.transparency": 90,
        // 	"scalesProperties.textColor" : "#AAA"
        // }
    });
};

window.addEventListener('DOMContentLoaded', initOnReady, false);