import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UtilModule } from '../../util/util.module';
import { LootModule } from '../loot/loot.module';
import { SkillRefModule } from '../../skills/skill-ref/skill-ref.module';

import { ItemComponentComponent } from './item-component/item-component.component';
import { PackageComponentComponent } from './package-component/package-component.component';
import { PropertyEntranceComponentComponent } from './property-entrance-component/property-entrance-component.component';
import { QuickBuildComponentComponent } from './quick-build-component/quick-build-component.component';
import { RebuildComponentComponent } from './rebuild-component/rebuild-component.component';
import { RenderComponentComponent } from './render-component/render-component.component';
import { ScriptComponentComponent } from './script-component/script-component.component';
import { ScriptedActivityComponentComponent } from './scripted-activity-component/scripted-activity-component.component';
import { ShootingGalleryComponentComponent } from './shooting-gallery-component/shooting-gallery-component.component';
import { SkillComponentComponent } from './skill-component/skill-component.component';
import { VendorComponentComponent } from './vendor-component/vendor-component.component';
import { CollectibleComponentComponent } from './collectible-component/collectible-component.component';
import { DestructibleComponentComponent } from './destructible-component/destructible-component.component';
import { GenericComponentComponent } from './generic-component/generic-component.component';
import { InventoryComponentComponent } from './inventory-component/inventory-component.component';
import { MissionNpcComponentComponent } from './mission-npc-component/mission-npc-component.component';
import { PhysicsComponentComponent } from './physics-component/physics-component.component';
import { ComponentDetailComponent } from './component-detail/component-detail.component';
import { GuiModule } from '../../gui/gui.module';
import { FactionTriggerComponentComponent } from './faction-trigger-component/faction-trigger-component.component';
import { BaseCombatAiComponentComponent } from './base-combat-ai-component/base-combat-ai-component.component';
import { MinifigComponentComponent } from './minifig-component/minifig-component.component';
import { UsedByComponent } from './used-by/used-by.component';

@NgModule({
  declarations: [
    ItemComponentComponent,
    PackageComponentComponent,
    PropertyEntranceComponentComponent,
    QuickBuildComponentComponent,
    RebuildComponentComponent,
    RenderComponentComponent,
    ScriptComponentComponent,
    ScriptedActivityComponentComponent,
    ShootingGalleryComponentComponent,
    SkillComponentComponent,
    VendorComponentComponent,
    CollectibleComponentComponent,
    DestructibleComponentComponent,
    GenericComponentComponent,
    InventoryComponentComponent,
    MissionNpcComponentComponent,
    PhysicsComponentComponent,
    ComponentDetailComponent,
    FactionTriggerComponentComponent,
    BaseCombatAiComponentComponent,
    MinifigComponentComponent,
    UsedByComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    LootModule,
    SkillRefModule,
    GuiModule,
    RouterModule.forChild([])
  ],
  exports: [
    ComponentDetailComponent,
    UsedByComponent,
  ]
})
export class ComponentsModule { }
