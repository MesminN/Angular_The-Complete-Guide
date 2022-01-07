import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
    span {
      color: hotpink;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
