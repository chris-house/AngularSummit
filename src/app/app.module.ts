import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PersonService } from './person.service';
import { AppComponent } from './app.component';
import { GenderPipe } from './gender.pipe';
import { SearchComponent } from './search/search.component';
import { PeopleProjectRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    PeopleProjectRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
