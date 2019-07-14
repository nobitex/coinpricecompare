var chart = LightweightCharts.createChart(document.body, {
    width: 900,
    height: 600,
    crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
    },
});

var candleSeries = chart.addCandlestickSeries();
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

var data = [
    {time: '2018-10-19', open: 54.62, high: 55.50, low: 54.52, close: 54.90},
    {time: '2018-10-22', open: 55.08, high: 55.27, low: 54.61, close: 54.98},
    {time: '2018-10-23', open: 56.09, high: 57.47, low: 56.09, close: 57.21},
    {time: '2018-10-24', open: 57.00, high: 58.44, low: 56.41, close: 57.42},
    {time: '2018-10-25', open: 57.46, high: 57.63, low: 56.17, close: 56.43},
    {time: '2018-10-26', open: 56.26, high: 56.62, low: 55.19, close: 55.51},
    {time: '2018-10-29', open: 55.81, high: 57.15, low: 55.72, close: 56.48},
    {time: '2018-10-30', open: 56.92, high: 58.80, low: 56.92, close: 58.18},
    {time: '2018-10-31', open: 58.32, high: 58.32, low: 56.76, close: 57.09},
    {time: '2018-11-01', open: 56.98, high: 57.28, low: 55.55, close: 56.05},
    {time: '2018-11-02', open: 56.34, high: 57.08, low: 55.92, close: 56.63},
    {time: '2018-11-05', open: 56.51, high: 57.45, low: 56.51, close: 57.21},
    {time: '2018-11-06', open: 57.02, high: 57.35, low: 56.65, close: 57.21},
    {time: '2018-11-07', open: 57.55, high: 57.78, low: 57.03, close: 57.65},
    {time: '2018-11-08', open: 57.70, high: 58.44, low: 57.66, close: 58.27},
    {time: '2018-11-09', open: 58.32, high: 59.20, low: 57.94, close: 58.46},
    {time: '2018-11-12', open: 58.84, high: 59.40, low: 58.54, close: 58.72},
    {time: '2018-11-13', open: 59.09, high: 59.14, low: 58.32, close: 58.66},
    {time: '2018-11-14', open: 59.13, high: 59.32, low: 58.41, close: 58.94},
    {time: '2018-11-15', open: 58.85, high: 59.09, low: 58.45, close: 59.08},
    {time: '2018-11-16', open: 59.06, high: 60.39, low: 58.91, close: 60.21},
    {time: '2018-11-19', open: 60.25, high: 61.32, low: 60.18, close: 60.62},
    {time: '2018-11-20', open: 61.03, high: 61.58, low: 59.17, close: 59.46},
    {time: '2018-11-21', open: 59.26, high: 59.90, low: 58.88, close: 59.16},
    {time: '2018-11-23', open: 58.86, high: 59.00, low: 58.29, close: 58.64},
    {time: '2018-11-26', open: 58.64, high: 59.51, low: 58.31, close: 59.17},
    {time: '2018-11-27', open: 59.21, high: 60.70, low: 59.18, close: 60.65},
    {time: '2018-11-28', open: 60.70, high: 60.73, low: 59.64, close: 60.06},
    {time: '2018-11-29', open: 59.42, high: 59.79, low: 59.26, close: 59.45},
    {time: '2018-11-30', open: 59.57, high: 60.37, low: 59.48, close: 60.30},
    {time: '2018-12-03', open: 59.50, high: 59.75, low: 57.69, close: 58.16},
    {time: '2018-12-04', open: 58.10, high: 59.40, low: 57.96, close: 58.09},
    {time: '2018-12-06', open: 58.18, high: 58.64, low: 57.16, close: 58.08},
    {time: '2018-12-07', open: 57.91, high: 58.43, low: 57.34, close: 57.68},
    {time: '2018-12-10', open: 57.80, high: 58.37, low: 56.87, close: 58.27},
    {time: '2018-12-11', open: 58.77, high: 59.40, low: 58.63, close: 58.85},
    {time: '2018-12-12', open: 57.79, high: 58.19, low: 57.23, close: 57.25},
    {time: '2018-12-13', open: 57.00, high: 57.50, low: 56.81, close: 57.09},
    {time: '2018-12-14', open: 56.95, high: 57.50, low: 56.75, close: 57.08},
    {time: '2018-12-17', open: 57.06, high: 57.31, low: 55.53, close: 55.95},
    {time: '2018-12-18', open: 55.94, high: 56.69, low: 55.31, close: 55.65},
    {time: '2018-12-19', open: 55.72, high: 56.92, low: 55.50, close: 55.86},
    {time: '2018-12-20', open: 55.92, high: 56.01, low: 54.26, close: 55.07},
    {time: '2018-12-21', open: 54.84, high: 56.53, low: 54.24, close: 54.92},
    {time: '2018-12-24', open: 54.68, high: 55.04, low: 52.94, close: 53.05},
    {time: '2018-12-26', open: 53.23, high: 54.47, low: 52.40, close: 54.44},
    {time: '2018-12-27', open: 54.31, high: 55.17, low: 53.35, close: 55.15},
    {time: '2018-12-28', open: 55.37, high: 55.86, low: 54.90, close: 55.27},
    {time: '2018-12-31', open: 55.53, high: 56.23, low: 55.07, close: 56.22},
    {time: '2019-01-02', open: 56.16, high: 56.16, low: 55.28, close: 56.02},
    {time: '2019-01-03', open: 56.30, high: 56.99, low: 56.06, close: 56.22},
    {time: '2019-01-04', open: 56.49, high: 56.89, low: 55.95, close: 56.36},
    {time: '2019-01-07', open: 56.76, high: 57.26, low: 56.55, close: 56.72},
    {time: '2019-01-08', open: 57.27, high: 58.69, low: 57.05, close: 58.38},
    {time: '2019-01-09', open: 57.68, high: 57.72, low: 56.85, close: 57.05},
    {time: '2019-01-10', open: 57.29, high: 57.70, low: 56.87, close: 57.60},
    {time: '2019-01-11', open: 57.84, high: 58.26, low: 57.42, close: 58.02},
    {time: '2019-01-14', open: 57.83, high: 58.15, low: 57.67, close: 58.03},
    {time: '2019-01-15', open: 57.74, high: 58.29, low: 57.58, close: 58.10},
    {time: '2019-01-16', open: 57.93, high: 57.93, low: 57.00, close: 57.08},
    {time: '2019-01-17', open: 57.16, high: 57.40, low: 56.21, close: 56.83},
    {time: '2019-01-18', open: 56.92, high: 57.47, low: 56.84, close: 57.09},
    {time: '2019-01-22', open: 57.23, high: 57.39, low: 56.40, close: 56.99},
    {time: '2019-01-23', open: 56.98, high: 57.87, low: 56.93, close: 57.76},
    {time: '2019-01-24', open: 57.61, high: 57.65, low: 56.50, close: 57.07},
    {time: '2019-01-25', open: 57.18, high: 57.47, low: 56.23, close: 56.40},
    {time: '2019-01-28', open: 56.12, high: 56.22, low: 54.80, close: 55.07},
    {time: '2019-01-29', open: 53.62, high: 54.30, low: 52.97, close: 53.28},
    {time: '2019-01-30', open: 53.10, high: 54.02, low: 52.28, close: 54.00},
    {time: '2019-01-31', open: 54.05, high: 55.19, low: 53.53, close: 55.06},
    {time: '2019-02-01', open: 55.21, high: 55.30, low: 54.47, close: 54.55},
    {time: '2019-02-04', open: 54.60, high: 54.69, low: 53.67, close: 54.04},
    {time: '2019-02-05', open: 54.10, high: 54.34, low: 53.61, close: 54.14},
    {time: '2019-02-06', open: 54.11, high: 54.37, low: 53.68, close: 53.79},
    {time: '2019-02-07', open: 53.61, high: 53.73, low: 53.02, close: 53.57},
    {time: '2019-02-08', open: 53.36, high: 53.96, low: 53.30, close: 53.95},
    {time: '2019-02-11', open: 54.13, high: 54.37, low: 53.86, close: 54.05},
    {time: '2019-02-12', open: 54.45, high: 54.77, low: 54.19, close: 54.42},
    {time: '2019-02-13', open: 54.35, high: 54.77, low: 54.28, close: 54.48},
    {time: '2019-02-14', open: 54.38, high: 54.52, low: 53.95, close: 54.03},
    {time: '2019-02-15', open: 54.48, high: 55.19, low: 54.32, close: 55.16},
    {time: '2019-02-19', open: 55.06, high: 55.66, low: 54.82, close: 55.44},
    {time: '2019-02-20', open: 55.37, high: 55.91, low: 55.24, close: 55.76},
    {time: '2019-02-21', open: 55.55, high: 56.72, low: 55.46, close: 56.15},
    {time: '2019-02-22', open: 56.43, high: 57.13, low: 56.40, close: 56.92},
    {time: '2019-02-25', open: 57.00, high: 57.27, low: 56.55, close: 56.78},
    {time: '2019-02-26', open: 56.82, high: 57.09, low: 56.46, close: 56.64},
    {time: '2019-02-27', open: 56.55, high: 56.73, low: 56.35, close: 56.72},
    {time: '2019-02-28', open: 56.74, high: 57.61, low: 56.72, close: 56.92},
    {time: '2019-03-01', open: 57.02, high: 57.15, low: 56.35, close: 56.96},
    {time: '2019-03-04', open: 57.15, high: 57.34, low: 55.66, close: 56.24},
    {time: '2019-03-05', open: 56.09, high: 56.17, low: 55.51, close: 56.08},
    {time: '2019-03-06', open: 56.19, high: 56.42, low: 55.45, close: 55.68},
    {time: '2019-03-07', open: 55.76, high: 56.40, low: 55.72, close: 56.30},
    {time: '2019-03-08', open: 56.36, high: 56.68, low: 56.00, close: 56.53},
    {time: '2019-03-11', open: 56.76, high: 57.62, low: 56.75, close: 57.58},
    {time: '2019-03-12', open: 57.63, high: 58.11, low: 57.36, close: 57.43},
    {time: '2019-03-13', open: 57.37, high: 57.74, low: 57.34, close: 57.66},
    {time: '2019-03-14', open: 57.71, high: 58.09, low: 57.51, close: 57.95},
    {time: '2019-03-15', open: 58.04, high: 58.51, low: 57.93, close: 58.39},
    {time: '2019-03-18', open: 58.27, high: 58.32, low: 57.56, close: 58.07},
    {time: '2019-03-19', open: 58.10, high: 58.20, low: 57.31, close: 57.50},
    {time: '2019-03-20', open: 57.51, high: 58.05, low: 57.11, close: 57.67},
    {time: '2019-03-21', open: 57.58, high: 58.49, low: 57.57, close: 58.29},
    {time: '2019-03-22', open: 58.16, high: 60.00, low: 58.13, close: 59.76},
    {time: '2019-03-25', open: 59.63, high: 60.19, low: 59.53, close: 60.08},
    {time: '2019-03-26', open: 60.30, high: 60.69, low: 60.17, close: 60.63},
    {time: '2019-03-27', open: 60.56, high: 61.19, low: 60.48, close: 60.88},
    {time: '2019-03-28', open: 60.88, high: 60.89, low: 58.44, close: 59.08},
    {time: '2019-03-29', open: 59.20, high: 59.27, low: 58.32, close: 59.13},
    {time: '2019-04-01', open: 59.39, high: 59.41, low: 58.79, close: 59.09},
    {time: '2019-04-02', open: 59.22, high: 59.23, low: 58.34, close: 58.53},
    {time: '2019-04-03', open: 58.78, high: 59.07, low: 58.41, close: 58.87},
    {time: '2019-04-04', open: 58.84, high: 59.10, low: 58.77, close: 58.99},
    {time: '2019-04-05', open: 59.02, high: 59.09, low: 58.82, close: 59.09},
    {time: '2019-04-08', open: 59.02, high: 59.13, low: 58.72, close: 59.13},
    {time: '2019-04-09', open: 58.37, high: 58.56, low: 58.04, close: 58.40},
    {time: '2019-04-10', open: 58.40, high: 58.70, low: 58.36, close: 58.61},
    {time: '2019-04-11', open: 58.65, high: 58.73, low: 58.20, close: 58.56},
    {time: '2019-04-12', open: 58.75, high: 58.79, low: 58.52, close: 58.74},
    {time: '2019-04-15', open: 58.91, high: 58.95, low: 58.59, close: 58.71},
    {time: '2019-04-16', open: 58.79, high: 58.98, low: 58.66, close: 58.79},
    {time: '2019-04-17', open: 58.40, high: 58.46, low: 57.64, close: 57.78},
    {time: '2019-04-18', open: 57.51, high: 58.20, low: 57.28, close: 58.04},
    {time: '2019-04-22', open: 58.14, high: 58.49, low: 57.89, close: 58.37},
    {time: '2019-04-23', open: 57.62, high: 57.72, low: 56.30, close: 57.15},
    {time: '2019-04-24', open: 57.34, high: 57.57, low: 56.73, close: 57.08},
    {time: '2019-04-25', open: 56.82, high: 56.90, low: 55.75, close: 55.85},
    {time: '2019-04-26', open: 56.06, high: 56.81, low: 55.83, close: 56.58},
    {time: '2019-04-29', open: 56.75, high: 57.17, low: 56.71, close: 56.84},
    {time: '2019-04-30', open: 56.99, high: 57.45, low: 56.76, close: 57.19},
    {time: '2019-05-01', open: 57.23, high: 57.30, low: 56.52, close: 56.52},
    {time: '2019-05-02', open: 56.81, high: 58.23, low: 56.68, close: 56.99},
    {time: '2019-05-03', open: 57.15, high: 57.36, low: 56.87, close: 57.24},
    {time: '2019-05-06', open: 56.83, high: 57.09, low: 56.74, close: 56.91},
    {time: '2019-05-07', open: 56.69, high: 56.81, low: 56.33, close: 56.63},
    {time: '2019-05-08', open: 56.66, high: 56.70, low: 56.25, close: 56.38},
    {time: '2019-05-09', open: 56.12, high: 56.56, low: 55.93, close: 56.48},
    {time: '2019-05-10', open: 56.49, high: 57.04, low: 56.26, close: 56.91},
    {time: '2019-05-13', open: 56.72, high: 57.34, low: 56.66, close: 56.75},
    {time: '2019-05-14', open: 56.76, high: 57.19, low: 56.50, close: 56.55},
    {time: '2019-05-15', open: 56.51, high: 56.84, low: 56.17, close: 56.81},
    {time: '2019-05-16', open: 57.00, high: 57.80, low: 56.82, close: 57.38},
    {time: '2019-05-17', open: 57.06, high: 58.48, low: 57.01, close: 58.09},
    {time: '2019-05-20', open: 59.15, high: 60.54, low: 58.00, close: 59.01},
    {time: '2019-05-21', open: 59.10, high: 59.63, low: 58.76, close: 59.50},
    {time: '2019-05-22', open: 59.09, high: 59.37, low: 58.96, close: 59.25},
    {time: '2019-05-23', open: 59.00, high: 59.27, low: 58.54, close: 58.87},
    {time: '2019-05-24', open: 59.07, high: 59.36, low: 58.67, close: 59.32},
    {time: '2019-05-28', open: 59.21, high: 59.66, low: 59.02, close: 59.57},
];
volumeSeries.setData([
    {time: '2018-10-19', value: 19103293.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-10-22', value: 21737523.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-10-23', value: 29328713.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-10-24', value: 37435638.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-10-25', value: 25269995.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-10-26', value: 24973311.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-10-29', value: 22103692.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-10-30', value: 25231199.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-10-31', value: 24214427.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-11-01', value: 22533201.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-11-02', value: 14734412.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-05', value: 12733842.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-06', value: 12371207.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-07', value: 14891287.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-08', value: 12482392.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-09', value: 17365762.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-12', value: 13236769.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-13', value: 13047907.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-11-14', value: 18288710.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-15', value: 17147123.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-16', value: 19470986.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-19', value: 18405731.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-20', value: 22028957.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-11-21', value: 18482233.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-11-23', value: 7009050.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-11-26', value: 12308876.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-27', value: 14118867.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-11-28', value: 18662989.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-11-29', value: 14763658.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-11-30', value: 31142818.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-12-03', value: 27795428.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-04', value: 21727411.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-06', value: 26880429.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-07', value: 16948126.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-10', value: 16603356.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-12-11', value: 14991438.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-12-12', value: 18892182.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-13', value: 15454706.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-14', value: 13960870.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-17', value: 18902523.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-18', value: 18895777.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-19', value: 20968473.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-12-20', value: 26897008.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-21', value: 55413082.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-24', value: 15077207.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2018-12-26', value: 17970539.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-12-27', value: 17530977.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-12-28', value: 14771641.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2018-12-31', value: 15331758.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-02', value: 13969691.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-03', value: 19245411.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-04', value: 17035848.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-07', value: 16348982.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-08', value: 21425008.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-09', value: 18136000.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-10', value: 14259910.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-11', value: 15801548.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-14', value: 11342293.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-15', value: 10074386.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-16', value: 13411691.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-17', value: 15223854.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-18', value: 16802516.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-22', value: 18284771.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-23', value: 15109007.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-24', value: 12494109.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-25', value: 17806822.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-28', value: 25955718.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-29', value: 33789235.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-01-30', value: 27260036.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-01-31', value: 28585447.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-01', value: 13778392.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-02-04', value: 15818901.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-02-05', value: 14124794.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-06', value: 11391442.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-02-07', value: 12436168.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-02-08', value: 12011657.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-11', value: 9802798.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-12', value: 11227550.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-13', value: 11884803.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-14', value: 11190094.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-02-15', value: 15719416.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-19', value: 12272877.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-20', value: 11379006.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-21', value: 14680547.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-22', value: 12534431.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-25', value: 15051182.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-02-26', value: 12005571.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-02-27', value: 8962776.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-02-28', value: 15742971.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-01', value: 10942737.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-04', value: 13674737.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-03-05', value: 15749545.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-03-06', value: 13935530.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-03-07', value: 12644171.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-08', value: 10646710.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-11', value: 13627431.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-12', value: 12812980.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-03-13', value: 14168350.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-14', value: 12148349.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-15', value: 23715337.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-18', value: 12168133.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-03-19', value: 13462686.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-03-20', value: 11903104.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-21', value: 10920129.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-22', value: 25125385.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-25', value: 15463411.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-26', value: 12316901.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-27', value: 13290298.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-03-28', value: 20547060.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-03-29', value: 17283871.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-01', value: 16331140.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-02', value: 11408146.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-03', value: 15491724.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-04', value: 8776028.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-05', value: 11497780.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-08', value: 11680538.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-09', value: 10414416.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-10', value: 8782061.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-11', value: 9219930.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-12', value: 10847504.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-15', value: 7741472.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-16', value: 10239261.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-17', value: 15498037.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-18', value: 13189013.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-22', value: 11950365.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-23', value: 23488682.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-24', value: 13227084.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-25', value: 17425466.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-04-26', value: 16329727.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-29', value: 13984965.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-04-30', value: 15469002.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-01', value: 11627436.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-05-02', value: 14435436.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-03', value: 9388228.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-06', value: 10066145.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-05-07', value: 12963827.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-05-08', value: 12086743.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-05-09', value: 14835326.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-10', value: 10707335.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-13', value: 13759350.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-05-14', value: 12776175.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-05-15', value: 10806379.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-16', value: 11695064.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-17', value: 14436662.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-20', value: 20910590.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-21', value: 14016315.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-22', value: 11487448.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-05-23', value: 11707083.00, color: 'rgba(255,82,82, 0.8)'},
    {time: '2019-05-24', value: 8755506.00, color: 'rgba(0, 150, 136, 0.8)'},
    {time: '2019-05-28', value: 3097125.00, color: 'rgba(0, 150, 136, 0.8)'},
]);

candleSeries.setData(data);

var lastClose = data[data.length - 1].close;
var lastIndex = data.length - 1;

var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
var targetPrice = getRandomPrice();

var currentIndex = lastIndex + 1;
var currentBusinessDay = {day: 29, month: 5, year: 2019};
var ticksInCurrentBar = 0;
var currentBar = {
    open: null,
    high: null,
    low: null,
    close: null,
    time: currentBusinessDay,
};

function mergeTickToBar(price) {
    if (currentBar.open === null) {
        currentBar.open = price;
        currentBar.high = price;
        currentBar.low = price;
        currentBar.close = price;
    } else {
        currentBar.close = price;
        currentBar.high = Math.max(currentBar.high, price);
        currentBar.low = Math.min(currentBar.low, price);
    }
    candleSeries.update(currentBar);
}

function reset() {
    candleSeries.setData(data);
    lastClose = data[data.length - 1].close;
    lastIndex = data.length - 1;

    targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
    targetPrice = getRandomPrice();

    currentIndex = lastIndex + 1;
    currentBusinessDay = {day: 29, month: 5, year: 2019};
    ticksInCurrentBar = 0;
}

function getRandomPrice() {
    return 10 + Math.round(Math.random() * 10000) / 100;
}

function nextBusinessDay(time) {
    var d = new Date();
    d.setUTCFullYear(time.year);
    d.setUTCMonth(time.month - 1);
    d.setUTCDate(time.day + 1);
    d.setUTCHours(0, 0, 0, 0);
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
    };
}

setInterval(function () {
    var deltaY = targetPrice - lastClose;
    var deltaX = targetIndex - lastIndex;
    var angle = deltaY / deltaX;
    var basePrice = lastClose + (currentIndex - lastIndex) * angle;
    var noise = (0.1 - Math.random() * 0.2) + 1.0;
    var noisedPrice = basePrice * noise;
    mergeTickToBar(noisedPrice);
    if (++ticksInCurrentBar === 5) {
        // move to next bar
        currentIndex++;
        currentBusinessDay = nextBusinessDay(currentBusinessDay);
        currentBar = {
            open: null,
            high: null,
            low: null,
            close: null,
            time: currentBusinessDay,
        };
        ticksInCurrentBar = 0;
        if (currentIndex === 5000) {
            reset();
            return;
        }
        if (currentIndex === targetIndex) {
            // change trend
            lastClose = noisedPrice;
            lastIndex = currentIndex;
            targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
            targetPrice = getRandomPrice();
        }
    }
}, 200);
