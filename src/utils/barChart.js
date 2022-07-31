import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = (props) => {
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData(props.skillsData, props.skills);
    }, [props.skills, props.skillsData])


    const setChartData = (skillsData, skills) => {
        let options = {
            chart: {
                type: "bar",
                backgroundColor: "transparent",
                height: 370,
                border: 0
            },
            credits: {
                enabled: false
            },
            title: {
                text: "",
                align: "left",
                style: {
                    color: "#000",
                    fontSize: "16px",
                    fontFamily: "Arial",
                },
            },
            xAxis: {
                categories: skills,
                gridLineColor: "transparent",
                gridLineWidth: 0,
                lineWidth: 0,
                labels: {
                    enabled: true,
                    allowOverlap: true,
                    style: {
                        color: "#8283A0",
                        fontSize: "14px",
                        fontWeight: "normal",
                        fontFamily: "Arial",
                    }
                }
            },
            yAxis: {
                min: 0,
                gridLineColor: "transparent",
                gridLineWidth: 0,
                lineWidth: 0,
                stackLabels: {
                    enabled: false,
                    style: {
                        color: "#3d3d40",
                        textOutline: "none",
                        fontWeight: "normal",
                        fontSize: "15px",
                        fontFamily: "Arial",
                    },
                },
                title: {
                    enabled: false,
                    text: '',
                    style: {
                        fontSize: "15px",
                        color: '#3d3d40',
                        fontFamily: "Arial",
                        cursor: "default",
                        fill: "#8283A0",
                    }
                },
                labels: {
                    enabled: true,
                    style: {
                        color: '#3d3d40',
                        fontFamily: "Arial",
                    },
                }
            },
            tooltip: {
                enabled: true,
                useHTML: true,
                style: {
                    color: "#000",
                    fontSize: "11px",
                    fontFamily: "arial",
                    fontWeight: "normal",
                },
                backgroundColor: "#FFFFFF",
                shared: false,
                valueDecimals: 2,
                formatter: function () {
                    return ("<b>" + this.key + ":</b> " + this.point.options.y);
                },
            },
            legend: {
                enabled: true,
                symbolHeight: 8,
                symbolWidth: 8,
                symbolRadius: 4,
                itemStyle: {
                    color: "#8283A0",
                    fontSize: "13px",
                    fontWeight: "normal",
                    fontFamily: "Arial",
                },
                itemHoverStyle: {
                    color: "#8283A0",
                    fontSize: "13px",
                    fontFamily: "Arial",
                    fontWeight: 'normal'
                },
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: "{point.format}",
                        style: {
                            color: "#979AB1",
                            textOutline: "none",
                            fontWeight: "normal",
                            fontSize: "13px",
                            fontFamily: "Arial",
                        },
                    }
                },
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                series: {
                    stacking: 'normal',
                    borderWidth: 0,
                    pointWidth: 15,
                    groupPadding: 0,
                    centerInCategory: true,
                    color: '#212AA5'
                }
            },
            series: skillsData,
        };
        setChartOptions(options);
    };

    return (
        <HighchartsReact
            options={chartOptions}
            highcharts={Highcharts}
        />
    );
}
export default BarChart;