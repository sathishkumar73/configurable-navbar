import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropDownValues = {};
  @Output() clickedRouteValue = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  routeLogic(event) {
    console.log(event.target);
    // this.clickedRouteValue.emit(event.target.value)
  }

}
