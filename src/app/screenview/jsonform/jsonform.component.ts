import { Component, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer, JsonFormsControl, JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsService } from 'src/app/services/jsonforms.service';
import { AutocompleteControlRenderer, HorizontalLayoutRenderer, JsonFormsAngularMaterialModule, LabelRenderer, VerticalLayoutRenderer, angularMaterialRenderers } from '@jsonforms/angular-material';
import { JsonSchema, JsonSchema7, Tester, UISchemaElement, and, createAjv, isControl, optionIs, rankWith, schemaTypeIs, scopeEndsWith } from '@jsonforms/core';
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
  data: string = "";
  schema: JsonSchema = {

  };
  uischema: UISchemaElement = {
    type: "string",
  };

  ajv = createAjv({
    schemaId: 'id',
    allErrors: true
  });
  i18n = {locale: 'de-DE'}

  renderers = [
    ...angularMaterialRenderers,
  ];
  
  constructor(
    private jsonFormsService: JsonFormsService, 
  ) {
    this.jsonFormsService.getFormSchema('assets/myform2.json').subscribe(result => {
      debugger;
      this.schema = result.schema;
      this.uischema = result.uischema;
      this.data = result.data;
    });
  }

  ngOnInit(): void {
    console.log('oninit');
  }
}



