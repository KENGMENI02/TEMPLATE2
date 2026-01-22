import { Component } from '@angular/core';
import { DescriptionComponent } from "./description/description.component";
import { PhoneMackUpComponent } from "./phone-mack-up/phone-mack-up.component";

@Component({
  selector: 'app-main',
  imports: [DescriptionComponent, PhoneMackUpComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
