import { Component } from '@angular/core';
import { UserLayoutComponent } from "../../shared/layout/user-layout/user-layout.component";
import { CurrencyPipe } from "@angular/common";
import { ExpenseOverviewComponent } from "../../shared/components/expense-overview/expense-overview.component";

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [UserLayoutComponent, CurrencyPipe, ExpenseOverviewComponent],
  templateUrl: './expense-list.component.html'
})
export class ExpenseListComponent {
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


}
