import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.css']
})
export class SuggestionCardComponent implements OnInit {
  @Input() result = {}
  constructor() { }

  ngOnInit() {
  }

}
