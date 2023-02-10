import { Directive } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
    selector: '[appDisableControl]'
})
export class DisableControlDirective {

    constructor(private ngControl: NgControl) {

    }
}
