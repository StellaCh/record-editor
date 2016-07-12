import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MapToIterablePipe } from '../map-to-iterable.pipe';

import { AbstractTrackerComponent } from '../abstract-tracker';
import { AddFieldDropdownComponent } from '../add-field-dropdown';

@Component({
  selector: 'object-field',
  directives: [AddFieldDropdownComponent],
  pipes: [MapToIterablePipe],
  template: require('./object-field.component.html'),
  styles: [
    require('./object-field.component.scss')
  ]
})
export class ObjectFieldComponent extends AbstractTrackerComponent {

  @Input() value: Object;
  @Input() schema: Object;

  /**
   * Event emitter to bind changes in the component to the model of parent component
   * RELATED: http://stackoverflow.com/questions/34608814/bidirectional-data-binding-on-a-component-input-property/34616530#34616530 
   */
  @Output() valueChangeEmitter: EventEmitter<string> = new EventEmitter<string>();

  valueChange(event: any, key: string) {
    this.value[key] = event;
    this.valueChangeEmitter.emit(event);
  }

  deleteField(name: string) {
    delete this.value[name];
  }
}
