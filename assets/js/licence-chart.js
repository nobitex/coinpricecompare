
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

// new window.TradingView.widget({
//         "container_id": this.id,
//         "width": '100%',
//         "height": 500,
//         "symbol": this.symbol,
//         "library_path": '/cdn/charting_library/',
//         "datafeed": new window.Datafeeds.UDFCompatibleDatafeed(api.getApiUrl() + 'market/udf', 10000000),
//         "interval": "720",
//         "timezone": "Asia/Tehran",
//         "timeframe": "H",
//         "theme": "Light",
//         "style": "1",
//         "custom_css_url": "style.css",
//         "locale": this.locale,
//         "toolbar_bg": "#f1f3f6",
//         "enable_publishing": false,
//         "allow_symbol_change": false,
//         "hideideas": true,
//         "disabled_features": ["use_localstorage_for_settings", "volume_force_overlay"],
//         "enabled_features": ["move_logo_to_main_pane", "study_templates"],
//         "charts_storage_url": 'https://saveload.tradingview.com',
//         "charts_storage_api_version": "1.1",
//         'withdateranges': true,
//         "time_frames": [
//           { "text": "1d", "resolution": "60" },
//           { "text": "1w", "resolution": "1D" },
// //          { "text": "2w", "resolution": "60" },
// //          { "text": "1m", "resolution": "1D" },
// //          { "text": "3m", "resolution": "1D" },
// //          { "text": "1000y", "resolution": "1D", "title": "All" }
//         ],
//         "overrides": {
//           "paneProperties.topMargin": 10
//         },
//         "debug": false,
//       });


var widget = new TradingView.widget({

    width: '100%',
    height: 500,
    symbol: 'BTCIRT',
    interval: '720',
    charts_storage_url: 'http://10.192.168.17:8000',
    charts_storage_api_version: "1.1",
    timezone: "Asia/Tehran",
    timeframe: "Y",
    theme: "Light",
    style: "1",
    custom_css_url: "style.css",
    vol:"unmerge_down",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: false,
    hideideas: true,
    has_weekly_and_monthly:true,
// supported_resolutions :["1", "15", "240", "D", "6M"],
    disabled_features: ["use_localstorage_for_settings", "volume_force_overlay"],
    enabled_features: [ "study_templates","move_logo_to_main_pane"],
    // withdateranges: true,
    time_frames: [
        { "text": "1h", "resolution": "60" },
        { "text": "1d", "resolution": "1D" },
        { "text": "2w", "resolution": "2W" },
        { "text": "1m", "resolution": "1M" },
        { "text": "3m", "resolution": "3M" },
        { "text": "1000y", "resolution": "1000Y", "title": "All" }

    ],
    overrides: {
        "paneProperties.topMargin": 10
    },
    debug: false,



    container_id: "tv_chart_container",
        //	BEWARE: no trailing slash is expected in feed URL
        datafeed: new window.Datafeeds.UDFCompatibleDatafeed("https://api.nobitex1.ir/" + 'market/udf', 10000000),
        library_path: "charting_library/",

    });

};

window.addEventListener('DOMContentLoaded', initOnReady, false);


