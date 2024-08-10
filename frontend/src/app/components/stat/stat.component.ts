import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './stat.component.html',
  styles: ``
})
export class StatComponent {


  @Input() title: string = "";
  @Input() data: string = "";
  @Input() stat: number = 0;

}
