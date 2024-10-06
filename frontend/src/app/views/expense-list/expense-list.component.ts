import { Component } from '@angular/core';
import { UserLayoutComponent } from "../../shared/layout/user-layout/user-layout.component";

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [UserLayoutComponent],
  templateUrl: './expense-list.component.html'
})
export class ExpenseListComponent {

}
