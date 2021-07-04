import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RackComponent } from './components/rack/rack.component';
import { RackStateComponent } from './components/rack-state/rack-state.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsOfShelfPipe } from './pipes/products-of-shelf.pipe';
import { JsonPrettyPipe } from './pipes/json-pretty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RackComponent,
    RackStateComponent,
    ProductsOfShelfPipe,
    JsonPrettyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
