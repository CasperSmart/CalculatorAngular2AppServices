import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { CalcResComponent } from './calc-res/calc-res.component';

import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    CalcResComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
