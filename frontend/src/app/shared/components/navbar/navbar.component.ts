import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


type Menu = {
  label: string,
  path?: string,
  children?: Menu[]
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
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

}
