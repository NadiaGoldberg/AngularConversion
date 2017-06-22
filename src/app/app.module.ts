import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { UserInputComponent } from './user-input.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
