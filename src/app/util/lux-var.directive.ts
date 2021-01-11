import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// https://stackoverflow.com/questions/38582293/how-to-declare-a-variable-in-a-template-in-angular
@Directive({
  selector: '[luxVar]',
})
export class LuxVarDirective {
  @Input()
  set luxVar(context: any) {
    this.context.$implicit = this.context.ngVar = context;
    this.updateView();
  }

  context: any = {};

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  updateView() {
    this.vcRef.clear();
    this.vcRef.createEmbeddedView(this.templateRef, this.context);
  }
}