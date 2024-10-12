import { Component } from '@angular/core';
import { UserLayoutComponent } from "../../shared/layout/user-layout/user-layout.component";
import { LineChartComponent } from "../../shared/components/line-chart/line-chart.component";
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { CurrencyPipe } from "@angular/common";
import { DoughnutChartComponent } from "../../shared/components/doughnut-chart/doughnut-chart.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserLayoutComponent, LineChartComponent, ToastComponent, CurrencyPipe, DoughnutChartComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {


  totalExpense = 823.63;

}
