import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-insights-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './insights-chart.component.html',
})
export class InsightsChartComponent {
  constructor() { }

  chartOption: EChartsOption = {
    title: {
      text: "Financial Insights",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
      }
    },
    xAxis: {
      type: 'category',
      data: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
    },
    legend: {
      // Try 'horizontal'
      orient: 'horizontal',
      // right: 10,
      top: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: { saveAsImage: {} }
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        name: 'Income',

        data: [89.3, 92.1, 94.4, 20.4]
      },
      {
        type: 'bar',
        name: 'Expenses',

        data: [95.8, 50.4, 91.2, 76.9]
      },
    ]
  };




}
