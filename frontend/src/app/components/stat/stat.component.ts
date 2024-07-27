import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [],
  templateUrl: './stat.component.html',
  styles: ``
})
export class StatComponent {


  @Input() title: string = "";
  @Input() data: string = "";
  @Input() stat: number = 0;
}
