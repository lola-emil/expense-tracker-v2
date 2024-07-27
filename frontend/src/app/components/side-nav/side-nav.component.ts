import { Component } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [TopNavComponent,],
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {

}
