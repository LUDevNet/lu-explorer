import { Injectable } from "@angular/core";
import { LuCoreDataService } from "app/services";
import { Observable } from "rxjs";

class GQL {
  template: TemplateStringsArray;
  args: GQL[];

  constructor(template: TemplateStringsArray, args: GQL[]) {
    this.template = template;
    this.args = args;
  }

  render(): string {
    return this.template.join("") + this.args.map(x => x.template).join("");
  }
}

export function gql(template: TemplateStringsArray, ...args: GQL[]): GQL {
  return new GQL(template, args);
}

export class Query<Output, Input> {
  apollo: Apollo;
  document: GQL;

  constructor(apollo: Apollo) {
    this.apollo = apollo;
  }

  watch(variables: Input): { valueChanges: Observable<Output> } {
    let doc = this.document.render();
    for (const key in variables) {
      doc = doc.replace(new RegExp(": \\$"+key, "g"), ": "+variables[key]);
    }
    return { valueChanges: this.apollo.luCoreData.queryGraphQl<Output>(doc) };
  }
};

@Injectable({
  providedIn: "root"
})
export class Apollo {
  luCoreData: LuCoreDataService;

  constructor(luCoreData: LuCoreDataService) {
    this.luCoreData = luCoreData;
  }
}
