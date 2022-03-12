import * as Highcharts from 'highcharts';

export const EXAMPLE_CHART: Highcharts.Options = {
    credits: {
        enabled: false,
    },
    series: [
        {
            color: '#158528',
            data: [
                ['JAWS', 53.7],
                ['NVDA', 30.7],
                ['VoiceOver', 6.5],
                ['ZoomText/Fusion', 4.7],
                ['System Access', 0.8],
                ['Narrator', 0.5],
                ['ChromeVox', 0.3],
                ['Other', 2.8],
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
            data: [
                ['JAWS', 40.2],
                ['NVDA', 41.6],
            ],
            name: 'Europe',
            type: 'column',
        }
    ],
    subtitle: {
        text: '',
    },
    title: {
        text: 'Primary desktop/laptop screen reader',
    },
    xAxis: {
        categories: [
            'NVDA', 'JAWS', 'VoiceOver', 'ZoomText/Fusion', 'System Access', 'Narrator', 'ChromeVox', 'Other'
        ],
    },
    yAxis: {
        title: {
            text: 'Usage in percent',
        }
    }
}
