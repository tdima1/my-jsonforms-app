import { Component, OnInit } from '@angular/core';
import { ControlProps, JsonFormsState, JsonSchema, RankedTester } from '@jsonforms/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-control-renderer',
  template: `
    <div *ngIf="visible">
      <label [attr.for]="id">{{ label }}</label>
      <input [id]="id" [type]="type" [(ngModel)]="data"
        [disabled]="!enabled" (change)="onChange($event)" />
      <div *ngIf="error">{{ error }}</div>
    </div>
  `,
  styles: []
})
export class SimpleControlRenderer extends JsonFormsControl implements OnInit {
  type: string = 'text'; // Default to text, customize as needed

  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override onChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    //this.handleChange(this.path, value);
  }


  determineInputType(schema: JsonSchema): string {
    switch (schema.type) {
      case 'string':
        if (schema.format === 'date') {
          return 'date';
        }
        return 'text';
      case 'number':
      case 'integer':
        return 'number';
      case 'boolean':
        return 'checkbox';
      default:
        return 'text';
    }
  }
}
