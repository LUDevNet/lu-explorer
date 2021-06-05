import { Directive, Input } from "@angular/core";
import { ObjectComponent } from "./object.component";
import { LuJsonService, LuLocaleService } from "../../services";

@Directive({
  selector: "lux-object[luxFetch]"
})
export class ObjectDirective {

  @Input("luxFetch") set id(id: number) {
    this.objectComponent.id = id;
    this.objectComponent.title = `#${id}`;
    this.luJson.getObject(id).subscribe(this.onObject);
  }

  constructor(private luJson: LuJsonService, private luLocale: LuLocaleService, private objectComponent: ObjectComponent) { }

  onObject = (object: any) => {
    if (object.displayName) {
      this.objectComponent.title = object.displayName;
    } else if (object.name) {
      this.objectComponent.title = object.name;
    }
    if (object.description) {
      this.objectComponent.tooltip = object.description;
    } else if (object._internalNotes) {
      this.objectComponent.tooltip = object._internalNotes;
    }
  }
}
