import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-notfound',
  standalone: true,
    imports: [
        ButtonModule,
        RippleModule,
        RouterLink
    ],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {

}
