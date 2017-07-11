import {Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[color]'
})
export class ColorDirective{
    @HostBinding('style.background-color')
    backgroundColor:string = 'yellow';
}
