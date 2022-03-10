import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SuggestionCardComponent } from './suggestion-card/suggestion-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    SearchBarComponent,
    SuggestionCardComponent,
    ProfileDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
