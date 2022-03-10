import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {
  showProfile = false;
  @Input() profileConfig: {};
  constructor() { }

  ngOnInit() {
  }

  showProfileOptions() {
    this.showProfile = !this.showProfile;
  }
}
