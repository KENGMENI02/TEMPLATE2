import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-mack-up',
  imports: [CommonModule],
  templateUrl: './phone-mack-up.component.html',
  styleUrl: './phone-mack-up.component.css'
})
export class PhoneMackUpComponent {

  // avatars des utilisateurs
  avatars=[
    '/avatar1.png',
    '/avatar2.png',
    '/avatar3.png',
    '/avatar4.png'
  ];

  //rating
  rating = '5.00';

  // etoiles
  stars = ['⭐','⭐','⭐','⭐','⭐'];

  //informations de l'utilisateur
  userName = 'Joe Smith';
  userStatus ='Online'
}
