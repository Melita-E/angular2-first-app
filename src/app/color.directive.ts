import {Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective{
  @HostBinding('style.background-color')

  @Input() color: any;
  backgroundColor:string = this.color;


}
