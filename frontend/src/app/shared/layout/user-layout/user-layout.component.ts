import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './user-layout.component.html',
})
export class UserLayoutComponent {

}
