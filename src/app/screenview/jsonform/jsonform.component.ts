import { Component, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer, JsonFormsControl, JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsService } from 'src/app/services/jsonforms.service';
import { AutocompleteControlRenderer, HorizontalLayoutRenderer, JsonFormsAngularMaterialModule, LabelRenderer, VerticalLayoutRenderer, angularMaterialRenderers } from '@jsonforms/angular-material';
import { Tester, and, createAjv, isControl, optionIs, rankWith, schemaTypeIs, scopeEndsWith } from '@jsonforms/core';
import { CustomAutocompleteControlRenderer } from '../custom.autocomplete';
import { SimpleControlRenderer } from 'src/app/renderers/simple-control.renderer';



const departmentTester: Tester = and(
  schemaTypeIs('string'),
);

@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.component.html',
  styleUrls: ['./jsonform.component.scss'],
})
export class JsonformComponent implements OnInit {
  data: any;
  schema: any;
  uischema: any;

  i18n = {locale: 'de-DE'}
  renderers = [
    ...angularMaterialRenderers,{
      renderer: JsonformComponent,
      tester: rankWith( 6, isControl)
    },
    //{ tester: rankWith(5, departmentTester), renderer: SimpleControlRenderer },
    
    // { 
    //   tester: rankWith(1, isControl),
    //   renderer: VerticalLayoutRenderer
    // },
    // { 
    //   tester: rankWith(1, isControl),
    //   renderer: HorizontalLayoutRenderer
    // }
  ];
  ajv = createAjv({
    schemaId: 'id',
    allErrors: true
  });
  
  
  constructor(
    private jsonFormsService: JsonFormsService, 
    private jsonFormsAngularService: JsonFormsAngularService
  ) {
    console.log('constructor');
    console.log(this.renderers);

    // this.jsonFormsService.getFormSchema('assets/myform2.json').subscribe(schema => {
    //   debugger;
    //   this.schema = schema.schema;
    //   this.uischema = schema.uischema;
    //   this.data = schema.data;
    // });
  }

  ngOnInit(): void {
    console.log('oninit');
    
    this.jsonFormsService.getFormSchema('assets/form3/schema.json').subscribe(schema => {
      debugger;
      this.schema = schema;
      // debugger;
      // this.schema = schema.schema;
      // this.uischema = schema.schema.uischema;
      // this.data = schema.schema.data;

      // this.jsonFormsAngularService.init({
      //   renderers: angularMaterialRenderers,
      //   data: schema.data,
      //   schema: schema.schema,
      //   uischema: schema.uischema
      // });

      //debugger;
      //this.jsonFormsAngularService.addRenderer(renderer, this.departmentTester);
      // this.jsonFormsAngularService.setData(this.data);
      // this.jsonFormsAngularService.setSchema(this.schema);
      // this.jsonFormsAngularService.setUiSchema(this.uischema);
    });

    this.jsonFormsService.getFormSchema('assets/form3/uischema.json').subscribe(uischema => {
      debugger;
      this.uischema = uischema;
    });

    this.jsonFormsService.getFormSchema('assets/form3/data.json').subscribe(data => {
      debugger;
      this.data = data;
    });

  }
}



