import { Component } from '@angular/core';
import { InsightsChartComponent } from '../../components/insights-chart/insights-chart.component';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { SideNavComponent } from "../../components/side-nav/side-nav.component";
import { StatComponent } from "../../components/stat/stat.component";
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    InsightsChartComponent,
    TopNavComponent,
    SideNavComponent,
    StatComponent,
    NgxEchartsDirective
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

  constructor() { }

  chartOptions: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

};