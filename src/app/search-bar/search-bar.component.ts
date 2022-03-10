import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../service/networkservice.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private networkService: NetworkserviceService) { }
  searchResult = [];
  firstApiCall = true;

  ngOnInit() {
  }

  searchHandler(value) {
    // For the first api call, don't make the api call till 3 characters are entered.
    if (this.firstApiCall && value.length === 2) {
      this.firstApiCall = false;
    } else if (!this.firstApiCall) {
      this.networkService.getData(value).subscribe(resp=>{
        this.searchResult = resp['Search'];
      }, err => {
        console.log(err);
      });
    }
  }

  // each search is added with an delay
  // in case in between another call is made, the current call is negated.
  optimisedSearch(fn, delay) {
    let timer;
    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, value);
      }, delay);
    };
  }

  debounceSearch = this.optimisedSearch(this.searchHandler, 500);

}
