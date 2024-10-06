import { Component } from '@angular/core';
import { UserLayoutComponent } from "../../shared/layout/user-layout/user-layout.component";

@Component({
  selector: 'app-expense-detail',
  standalone: true,
  imports: [UserLayoutComponent],
  templateUrl: './expense-detail.component.html'
})
export class ExpenseDetailComponent {

}
