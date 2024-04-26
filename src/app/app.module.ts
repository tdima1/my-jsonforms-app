import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonformComponent } from './screenview/jsonform/jsonform.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonForms, JsonFormsAngularService, JsonFormsModule, JsonFormsOutlet } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { CustomAutocompleteControlRenderer } from './screenview/custom.autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SimpleControlRenderer } from './renderers/simple-control.renderer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomAutocompleteControlRenderer,
    SimpleControlRenderer,
    JsonformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    MatAutocompleteModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [JsonFormsAngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
