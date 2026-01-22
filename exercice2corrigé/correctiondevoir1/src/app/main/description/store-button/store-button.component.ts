import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-store-button',
  imports: [CommonModule],
  templateUrl: './store-button.component.html',
  styleUrl: './store-button.component.css'
})
export class StoreButtonComponent {
 storeButtons =[
  {
    icon:'/icons8-play-30.png',
    topText: 'Get in',
    bottomText: 'Google Play',
  },

  {
    icon:'/icons8-play-30.png',
    topText: 'Get in',
    bottomText: 'Apple Store',
  }
 ];
}
