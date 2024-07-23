import { Component } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [TopNavComponent,],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

}
