import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


type Menu = {
  label: string,
  path?: string,
  children?: Menu[]
};


type Notification = {
  title: string,
  date: string,
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  navMenu: Menu[] = [
    {
      label: "Dashboard",
      path: "" 
    },

    {
      label: "Transactions",
      path: "",
    },

    {
      label: "Settings",
      path: "" 
    },
  ];

  notifications: Notification[] = [];

}
