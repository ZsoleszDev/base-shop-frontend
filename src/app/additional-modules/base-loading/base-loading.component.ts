import {Component, Input} from '@angular/core';

@Component({
  selector: 'base-loading',
  templateUrl: './base-loading.component.html',
  styleUrl: './base-loading.component.scss'
})
export class BaseLoadingComponent {

    @Input() loadingText: string;

}
