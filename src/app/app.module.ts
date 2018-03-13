import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReplacePipe, KeysPipe } from './custom-pipes.pipe';

import { AppComponent } from './app.component';
import { LuJsonService } from './lu-json.service';
import { ZonesComponent } from './zones/zones.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GithubSpaComponent } from './github-spa/github-spa.component';
import { AccDefaultLocComponent } from './acc-default-loc/acc-default-loc.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { BehaviorDetailComponent } from './behavior/detail/detail.component';
import { SkillComponent } from './skill/skill.component';
import { IconComponent } from './icon/icon.component';
import { BehaviorDetailAltComponent } from './behavior/detail-alt/detail-alt.component';
import { ObjectsComponent } from './objects/objects.component';
import { RenderComponent } from './objects/render/render.component';



@NgModule({
  declarations: [
    AppComponent,
    ZonesComponent,
    ZoneDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GithubSpaComponent,
    AccDefaultLocComponent,
    ReplacePipe,
    KeysPipe,
    BehaviorComponent,
    BehaviorDetailComponent,
    SkillComponent,
    IconComponent,
    BehaviorDetailAltComponent,
    ObjectsComponent,
    RenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LuJsonService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
