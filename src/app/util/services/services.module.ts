import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuJsonService } from './lu-json.service';
import { LuLocaleService } from './lu-locale.service';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  providers: [
    LuJsonService,
    LuLocaleService,
    MessageService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class ServicesModule { }
