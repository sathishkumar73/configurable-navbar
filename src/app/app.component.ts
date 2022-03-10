import { Component, OnInit, Output, SimpleChange } from "@angular/core";
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})

export class AppComponent implements OnInit{
  config = {
    navItems:
    // [
    //   {
    //     type: 'profile-dropdown',

    //   },
    //   {
    //     type: 'drop-down',
    //   }
    // ]

    {
      items: ["dropdowns", "searchbar", "profile"],
      order: ["dropdowns", "searchbar", "dropdown3", "profile"],
      dropdowns: [
        {
          id: 1,
          values: ["Business", "create Idea pin", "create pin"],
        },
        {
          id: 2,
          values: ["Create", "eightfold", "hello"],
        },
        {
          id: 3,
          values: ["Analytics", "apple", "facebook"],
        },
      ],
      profile: {
        "icon": "imageLink",
        values: ["View Profile", "Support", "Leaves", "Logout"]
      },
    },
  };

  dropdownValues = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.dropdownValues = this.config['navItems']['dropdowns']
    // console.log(this.routeCreator('View Profile'))
  }

  changeTheRoute(value) {
    // console.log(value)
  }

  // route path generator for given string
  routeCreator(route) {
    // Input - View profile
    // Output - view-profile
    route = route.toLowerCase().split(' ');
    if (route.length > 1) route = route.join('-');
    else route = route.join('');
    return route;
  }



}
