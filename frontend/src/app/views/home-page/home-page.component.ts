import { Component } from '@angular/core';
import { UserLayoutComponent } from "../../shared/layout/user-layout/user-layout.component";
import { LineChartComponent } from "../../shared/components/line-chart/line-chart.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserLayoutComponent, LineChartComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
