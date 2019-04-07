import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptsRoutingModule } from './scripts-routing.module';
import { LuaComponent } from './lua/lua.component';
import { ScriptFileComponent } from './script-file/script-file.component';
import { ScriptsComponent } from './scripts.component';

@NgModule({
  declarations: [
    LuaComponent,
    ScriptFileComponent,
    ScriptsComponent
  ],
  imports: [
    CommonModule,
    ScriptsRoutingModule
  ]
})
export class ScriptsModule { }
