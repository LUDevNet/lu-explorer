import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface Context<T> {
  luxVar: T,
  $implicit: T,
}

// https://stackoverflow.com/questions/38582293/how-to-declare-a-variable-in-a-template-in-angular
@Directive({
  selector: '[luxVar]',
})
export class LuxVarDirective<T> {
  @Input()
  set luxVar(context: T) {
    this.context.$implicit = this.context.luxVar = context;
    this.updateView();
  }

  context: Context<T> = {
    luxVar: null,
    $implicit: null,
  };

  static ngTemplateGuard_luxVar: 'binding';
  static ngTemplateContextGuard<T>(dir: LuxVarDirective<T>, ctx: any): ctx is Context<T> { return true; };

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<Context<T>>) { }

  updateView() {
    this.vcRef.clear();
    this.vcRef.createEmbeddedView(this.templateRef, this.context);
  }
}