import { Component, OnInit } from '@angular/core';


declare function init_plugins();


@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styles: []
})
export class ErrorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
