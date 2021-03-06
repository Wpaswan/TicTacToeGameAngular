import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  // templateUrl: './square.component.html',
  // styleUrls: ['./square.component.scss']
  template:
  `
  
  <button nbButton *ngIf="!value" >{{value}}</button>
  <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
  <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button {  width: 100%; height: 100%; font-size: 5em !important;color:blue;bgcolor:blue }'
            ]

})
export class SquareComponent  {
@Input() value: 'X' | 'O' | undefined;

}
