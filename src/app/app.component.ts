import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsPatternFill from 'highcharts/modules/pattern-fill';

import { EXAMPLE_CHART } from './config/chart.config';
import { ScreenreaderName, SCREENREADER_TABS } from './constants/screenreader.constants';
import { MyExampleChart } from './models/example-chart.interface';

highchartsAccessibility(Highcharts);
highchartsPatternFill(Highcharts);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public chartOptions = EXAMPLE_CHART;
    public highchartsLib = Highcharts;
    public screenreaderTabs = SCREENREADER_TABS;
    public selectedTabIndex = 0;

    public addCustomPropertiesToChart(chartInstance: Highcharts.Chart): void {
        (chartInstance as MyExampleChart).onSeriesPointClick = (name) => this.selectScreenreaderTab(name);
    }

    public selectScreenreaderTab(name: ScreenreaderName): void {
        const matchingTabIndex = this.screenreaderTabs.findIndex(tab => tab.label === name);
        if (matchingTabIndex >= 0) {
            this.selectedTabIndex = matchingTabIndex;
        }
    }
}
