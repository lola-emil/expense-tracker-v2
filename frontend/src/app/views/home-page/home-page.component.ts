import { Component } from '@angular/core';
import { UserLayoutComponent } from "../../shared/layout/user-layout/user-layout.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
