import { Component } from '@angular/core';

type FormError = {
  email?: string,
  password?: string
};

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [],
  templateUrl: './signin-page.component.html',
})
export class SigninPageComponent {
  constructor() {}

  error: FormError = {
    email: ""
  };

  loading = false;

}
