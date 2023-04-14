import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { FiltersComponent } from './components/list-employees/filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListEmployeesComponent, FiltersComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
