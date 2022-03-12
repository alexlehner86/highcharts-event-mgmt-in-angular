import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import patternFill from 'highcharts/modules/pattern-fill';

import { EXAMPLE_CHART } from './config/chart.config';

patternFill(Highcharts);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public highchartsLib = Highcharts;
    public chartOptions = EXAMPLE_CHART;
}
