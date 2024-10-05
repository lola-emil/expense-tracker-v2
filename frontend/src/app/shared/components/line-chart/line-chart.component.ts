import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxEchartsDirective, NgxEchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {

  chartOptions: EChartsOption = {};


}
