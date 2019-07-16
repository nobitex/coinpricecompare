var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://api.nobitex1.ir/market/udf/history?symbol=BTCIRT&resolution=720&from=1555413244&to=1563260646", false); // false for synchronous request
xmlHttp.send(null);
var result = xmlHttp.responseText;
result = JSON.parse(result);
var open = result['o'];
var close = result['c'];
var high = result['h'];
var low = result['l'];
var time = result['t'];
var value = result['v'];

var arr = [];
var volume = []
for (var key in open) {
    arr[key] = {time: time[key], open: open[key], close: close[key], high: high[key], low: low[key]};
};

for (var key in value) {
    volume[key] = {value: value[key], time: time[key]};
    if (parseInt(open[key], 10) < parseInt(close[key], 10)) {
        volume[key]['color'] = 'rgba(0, 150, 136, 0.5)';
    } else {
        volume[key]['color'] = 'rgba(249, 83, 83, 1)';
    }
};


    var chart = LightweightCharts.createChart(document.body, {
        width: 800,
        height: 400,

        layout: {
            backgroundColor: '#000000',
            textColor: 'rgba(255, 255, 255, 0.9)',
        },
        grid: {
            vertLines: {
                color: 'rgba(197, 203, 206, 0.5)',
            },
            horzLines: {
                color: 'rgba(197, 203, 206, 0.5)',
            },
        },
        crosshair: {
            mode: LightweightCharts.CrosshairMode.Normal,
        },
        priceScale: {
            borderColor: 'rgba(197, 203, 206, 0.8)',
        },

        timeScale: {
            timeVisible: true,
            borderColor: 'rgba(197, 203, 206, 0.8)',
        },
    });


    var volumeSeries = chart.addHistogramSeries({
        color: '#26a69a',
        lineWidth: 2,
        priceFormat: {
            type: 'volume',
        },
        overlay: true,
        scaleMargins: {
            top: 0.8,
            bottom: 0,
        },
    });


    var candleSeries = chart.addCandlestickSeries({
        upColor: 'rgba(0, 150, 136, 0.8)',
        downColor: 'rgba(255,82,82, 0.8)',
        borderDownColor: 'rgba(255,82,82, 0.8)',
        borderUpColor: 'rgba(0, 150, 136, 0.8)',
        wickDownColor: 'rgba(255,82,82, 0.8)',
        wickUpColor: 'rgba(0, 150, 136, 0.8)',
    });

    candleSeries.setData(arr);

    volumeSeries.setData(volume);