import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './shared/listing/listing.component';
import { HeaderComponent } from './shared/header/header.component';
import { EmployeesComponent } from './containers/employees/employees.component';
import { SearchComponent } from './shared/search/search.component';
import { ItemComponent } from './containers/employees/item/item.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './shared/pipes/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from './shared/modal/modal.module';
import { EditComponent } from './containers/employees/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HeaderComponent,
    EmployeesComponent,
    SearchComponent,
    ItemComponent,
    SearchPipe,
    EditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ModalModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
