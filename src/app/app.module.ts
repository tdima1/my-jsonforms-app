import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonformComponent } from './screenview/jsonform/jsonform.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonForms, JsonFormsAngularService, JsonFormsModule, JsonFormsOutlet } from '@jsonforms/angular';

@NgModule({
  declarations: [
    AppComponent,
    JsonformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,JsonFormsModule  
  ],
  providers: [JsonFormsAngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
