import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

import { ReplacePipe, KeysPipe, RemovePipe, NonNullPipe, DatePipe, HtmlPipe } from './custom-pipes.pipe';

import { AppComponent } from './app.component';
import { LuJsonService } from './lu-json.service';
import { LocaleService } from './locale.service';
import { ZonesComponent } from './zones/zones.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GithubSpaComponent } from './github-spa/github-spa.component';
import { AccDefaultLocComponent } from './misc/acc-default-loc/acc-default-loc.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { BehaviorDetailComponent } from './behavior/detail/detail.component';
import { SkillComponent } from './skill/skill.component';
import { IconComponent } from './icon/icon.component';
import { BehaviorDetailAltComponent } from './behavior/detail-alt/detail-alt.component';
import { ObjectsComponent } from './objects/objects.component';
import { RenderComponent } from './objects/render/render.component';
import { PackageComponent } from './objects/package/package.component';
import { ItemComponent } from './objects/item/item.component';
import { ObjectSkillComponent } from './objects/skill/skill.component';
import { DataTableComponent } from './data-table/data-table.component';
import { PhysicsComponent } from './objects/physics/physics.component';
import { LootTableComponent } from './loot-table/loot-table.component';
import { ScriptComponent } from './objects/script/script.component';
import { DestroyableComponent } from './objects/destroyable/destroyable.component';
import { GenericComponent } from './objects/generic/generic.component';
import { VendorComponent } from './objects/vendor/vendor.component';
import { LootMatrixComponent } from './loot-matrix/loot-matrix.component';
import { BrickColorsComponent } from './misc/brick-colors/brick-colors.component';
import { EventGatingComponent } from './misc/event-gating/event-gating.component';
import { FactionsComponent } from './factions/factions.component';
import { NpcIconComponent } from './objects/npc-icon/npc-icon.component';
import { LuzComponent } from './zones/luz/luz.component';
import { LvlComponent } from './zone-detail/lvl/lvl.component';
import { ScenesComponent } from './zone-detail/scenes/scenes.component';
import { V3fComponent } from './serialize/v3f/v3f.component';
import { PosComponent } from './serialize/pos/pos.component';
import { RotComponent } from './serialize/rot/rot.component';
import { ModuleComponent } from './objects/module/module.component';
import { CollectibleComponent } from './objects/collectible/collectible.component';
import { InventoryComponent } from './objects/inventory/inventory.component';
import { MissionNpcComponent } from './objects/mission-npc/mission-npc.component';
import { MissionsComponent } from './missions/missions.component';
import { ImageComponent } from './serialize/image/image.component';
import { MissionDetailComponent } from './missions/detail/detail.component';
import { ObjectDetailComponent } from './objects/detail/detail.component';
import { MiscComponent } from './misc/misc.component';



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
    RemovePipe,
    NonNullPipe,
    DatePipe,
    HtmlPipe,
    BehaviorComponent,
    BehaviorDetailComponent,
    SkillComponent,
    IconComponent,
    BehaviorDetailAltComponent,
    ObjectsComponent,
    RenderComponent,
    PackageComponent,
    ItemComponent,
    ObjectSkillComponent,
    DataTableComponent,
    PhysicsComponent,
    LootTableComponent,
    ScriptComponent,
    DestroyableComponent,
    GenericComponent,
    VendorComponent,
    LootMatrixComponent,
    BrickColorsComponent,
    EventGatingComponent,
    FactionsComponent,
    NpcIconComponent,
    LuzComponent,
    LvlComponent,
    ScenesComponent,
    V3fComponent,
    PosComponent,
    RotComponent,
    ModuleComponent,
    CollectibleComponent,
    InventoryComponent,
    MissionNpcComponent,
    MissionsComponent,
    ImageComponent,
    MissionDetailComponent,
    ObjectDetailComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LuJsonService,
    MessageService,
    LocaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
