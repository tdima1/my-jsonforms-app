import { Component, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { materialRenderers } from '@jsonforms/material-renderers';
import { JsonFormsService } from 'src/app/services/jsonforms.service';
import { angularMaterialRenderers } from '@jsonforms/angular-material';

@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.component.html',
  styleUrls: ['./jsonform.component.scss']
})
export class JsonformComponent implements OnInit {
  data: any;
  schema: any;
  uischema: any;
  
  constructor(private jsonFormsService: JsonFormsService, private jsonFormsAngularService: JsonFormsAngularService) {
    console.log('constructor');
    // jsonFormsAngularService.init({
    //   renderers: materialRenderers,
    //   schemas: {}
    // });
  }

  ngOnInit(): void {
    console.log('oninit');
    this.jsonFormsService.getFormSchema('assets/myform.json').subscribe(schema => {
      debugger;
      this.schema = schema.schema;
      this.uischema = schema.uischema;
      this.data = schema.data;

      this.jsonFormsAngularService.init({
        renderers: angularMaterialRenderers,
        data: schema.data,
        schema: schema.schema,
        uischema: schema.uischema
      });
    });

    debugger;
    this.jsonFormsAngularService.setData(this.data);
    this.jsonFormsAngularService.setSchema(this.schema);
    this.jsonFormsAngularService.setUiSchema(this.uischema);
  }
}
