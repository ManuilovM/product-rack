import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RackComponent } from './components/rack/rack.component';
import { RackStateComponent } from './components/rack-state/rack-state.component';

@NgModule({
  declarations: [
    AppComponent,
    RackComponent,
    RackStateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
