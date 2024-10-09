import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import { LinearGradientObject } from 'echarts';
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxEchartsDirective, NgxEchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {



  chartOptions: EChartsOption = {
    title: {
      text: 'Basic Line Chart',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true, // Show or hide split lines
        lineStyle: {
          color: '#333', // Color of the split lines
          width: 1,          // Width of the split lines
          type: 'dashed',    // Type of the split lines ('solid', 'dashed', 'dotted')
        },
      }
    },

    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      containLabel: true, // Makes sure labels don't overlap with chart edges
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130, 130],
      type: 'line',
      smooth: true, // Makes the line smooth instead of sharp
      lineStyle: {
        color: "#ff0000"
      },

    }],
  };


}
