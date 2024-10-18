import { Component } from '@angular/core';
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-expense-overview',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './expense-overview.component.html',
  styleUrl: './expense-overview.component.css'
})
export class ExpenseOverviewComponent {
  totalExpense = 823.63;

}
