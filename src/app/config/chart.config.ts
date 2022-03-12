import * as Highcharts from 'highcharts';
import { ScreenreaderName } from 'src/app/constants/screenreader.constants';
import { MyExampleChart } from 'src/app/models/example-chart.interface';

export const EXAMPLE_CHART: Highcharts.Options = {
    accessibility: {
        enabled: true,
        keyboardNavigation: {
            enabled: false,
        },
        linkedDescription: '#highcharts-description-1',
    },
    credits: {
        enabled: false,
    },
    plotOptions: {
        series: {
            point: {
                events: {
                    click: function(this) {
                        const chart = this.series.chart as MyExampleChart;
                        chart.onSeriesPointClick(this.name as ScreenreaderName);
                    }
                }
            }
        }
    },
    series: [
        {
            color: '#158528',
            cursor: 'pointer',
            data: [
                [ScreenreaderName.Jaws, 53.7],
                [ScreenreaderName.Nvda, 30.7],
                [ScreenreaderName.VoiceOver, 6.5],
                [ScreenreaderName.ZoomTextFusion, 4.7],
                [ScreenreaderName.Other, 4.4],
            ],
            name: 'Worldwide',
            type: 'column',
        },
        {
            color: {
                pattern: {
                    backgroundColor: '#96dbe7',
                    color: '#080e38',
                    height: 10,
                    path: 'M 0 0 L 10 10 M 9 - 1 L 11 1 M - 1 9 L 1 11',
                    width: 10,
                } as any
            },
            cursor: 'pointer',
            data: [
                [ScreenreaderName.Jaws, 40.2],
                [ScreenreaderName.Nvda, 41.6],
            ],
            name: 'Europe',
            type: 'column',
        }
    ],
    subtitle: {
        text: '',
    },
    title: {
        text: 'Primary desktop/laptop screen reader (2021)',
    },
    xAxis: {
        categories: [
            ScreenreaderName.Jaws,
            ScreenreaderName.Nvda,
            ScreenreaderName.VoiceOver,
            ScreenreaderName.ZoomTextFusion,
            ScreenreaderName.Other,
        ],
    },
    yAxis: {
        title: {
            text: 'Usage in percent',
        }
    }
}
