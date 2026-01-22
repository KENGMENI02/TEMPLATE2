import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  //liens de navigation
  navLinks=[
    {
      label: 'Home',
      path: '/home',
      hasDropdown: true
    },
    
    {
       label: 'Pages',
      path: '/Pages',
      hasDropdown: true
    },
    
    {
       label: 'About',
      path: '/About',
      hasDropdown: false
    },
  
    {
       label: 'Blog',
      path: '/Blog',
      hasDropdown: true
    },

    {
       label: 'Contact',
      path: '/Contact',
      hasDropdown: false
    },
  
  ]

}
