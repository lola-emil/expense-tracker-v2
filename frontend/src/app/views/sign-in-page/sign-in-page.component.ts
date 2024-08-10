import { Component } from '@angular/core';
import { AuthError, AuthService } from '../../data/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isLoading = false;
  errors?: AuthError;

  signInFormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });


  signIn() {
    this.isLoading = true;
    this.authService.signIn(
      this.signInFormGroup.value.email ?? "",
      this.signInFormGroup.value.password ?? "")
      .subscribe({
        next: (data) => {
          this.isLoading = false;
          this.authService.setToken((<{ token: string; }>data).token);
          this.router.navigate(["dashboard"]);
        },
        error: (err) => {
          this.errors = err.error.data;
          this.isLoading = false;
        },
      });

  }
}
