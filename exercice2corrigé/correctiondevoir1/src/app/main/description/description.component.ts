import { Component } from '@angular/core';
import { StoreButtonComponent } from "./store-button/store-button.component";

@Component({
  selector: 'app-description',
  imports: [StoreButtonComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

  smallTitle = "WE ARE 5GAPP HERE";
  mainTitle ="Trusted by Users Thousands of Wordlwide";
  description = "In today's fast-paced digital world, managing everything from productivity to communication can feel overwhelming.";
}
