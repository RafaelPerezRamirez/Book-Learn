import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//Service
import { SalesService } from './services/sales.service';

//Pipes
import { sortTotalPipe } from './pipes/sortTotal.pipe';
import { sortDatePipe } from './pipes/sortDate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    sortTotalPipe,
    sortDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      SalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
