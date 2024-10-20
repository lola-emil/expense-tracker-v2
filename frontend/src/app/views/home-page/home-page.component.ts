import { Component, OnDestroy } from '@angular/core';
import { UserLayoutComponent } from "../../shared/layout/user-layout/user-layout.component";
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { CurrencyPipe, NgClass } from "@angular/common";
import { DoughnutChartComponent } from "../../shared/components/doughnut-chart/doughnut-chart.component";
import { BarChartComponent } from "../../shared/components/bar-chart/bar-chart.component";
import { ExpenseOverviewComponent } from "../../shared/components/expense-overview/expense-overview.component";



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserLayoutComponent, ToastComponent, CurrencyPipe, DoughnutChartComponent, NgClass, BarChartComponent, ExpenseOverviewComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnDestroy {

  constructor() { }

  totalExpense = 823.63;

  recentActivities = [
    {
      id: 1,
      transactionNumber: "TXN001",
      amount: 1000,
      vendor: "Office Depot",
      date: "2024-10-01",
      status: "Pending"
    },

    {
      id: 1,
      transactionNumber: "TXN002",
      amount: 399.99,
      vendor: "Uber",
      date: "2024-10-01",
      status: "Pending"
    },

    {
      id: 1,
      transactionNumber: "TXN003",
      amount: 12.50,
      vendor: "Starbucks",
      date: "2024-10-01",
      status: "Pending"
    },

    {
      id: 1,
      transactionNumber: "TXN004",
      amount: 423.25,
      vendor: "Amazon",
      date: "2024-10-01",
      status: "Pending"
    },

    {
      id: 1,
      transactionNumber: "TXN005",
      amount: 450.00,
      vendor: "Airbnb",
      date: "2024-10-01",
      status: "Pending"
    },
  ];

  currentFilter: 'daily' | 'weekly' | 'monthly' = 'daily';

  updateByTime(state: 'daily' | 'monthly' | 'weekly') {
    this.currentFilter = state;
  }


  ngOnDestroy(): void {

  }

}
