import { Component } from '@angular/core';
import { UserLayoutComponent } from "../../shared/layout/user-layout/user-layout.component";
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [UserLayoutComponent, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent {
  constructor() { }

  formGroup = new FormGroup({

  });


}
