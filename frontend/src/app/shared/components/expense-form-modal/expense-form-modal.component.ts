import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-expense-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense-form-modal.component.html',
  styleUrl: './expense-form-modal.component.css'
})
export class ExpenseFormModalComponent {

  formGroup = new FormGroup({});

  submitForm() {
    alert("Gi submit ang form")
  }
}
