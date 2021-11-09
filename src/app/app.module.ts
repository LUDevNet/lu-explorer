import { BrowserModule, Title }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

import { LuDocsService, LuJsonService, LuLocaleService } from './services';
import { MessageService } from './util/services/message.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { UtilModule } from './util/util.module';
import { MiscModule } from './misc/misc.module';
import { SerializeModule } from './serialize/serialize.module';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SerializeModule,
    UtilModule,
    MiscModule,
  ],
  providers: [
    LuJsonService,
    MessageService,
    LuLocaleService,
    LuDocsService,
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
