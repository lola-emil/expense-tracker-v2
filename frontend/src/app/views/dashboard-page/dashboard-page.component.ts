import { Component } from '@angular/core';
import { InsightsChartComponent } from '../../components/insights-chart/insights-chart.component';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { SideNavComponent } from "../../components/side-nav/side-nav.component";
import { StatComponent } from "../../components/stat/stat.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    InsightsChartComponent,
    TopNavComponent,
    SideNavComponent,
    StatComponent,
],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

  constructor() { }


}
