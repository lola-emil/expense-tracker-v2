import { Component } from '@angular/core';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';


const colors = [
  "#f87171",
  "#fbbf24",
  "#4ade80",
  "#3b82f6",
  "#d946ef",
  "#ec4899",
  "#ec4899"
];

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})
export class DoughnutChartComponent {
  options: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '90%'],
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
}
