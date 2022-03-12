import * as Highcharts from 'highcharts';
import { ScreenreaderName } from 'src/app/constants/screenreader.constants';

export interface MyExampleChart extends Highcharts.Chart {
    onSeriesPointClick: (name: ScreenreaderName) => void;
}
