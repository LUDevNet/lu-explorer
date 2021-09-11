import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination/pagination.component';
import { DataTableComponent } from './data-table/data-table.component';
import { GithubSpaComponent } from './github-spa/github-spa.component';
import { IconComponent } from './icon/icon.component';

import { ArraySortPipe, ArraySortNumPipe, DefaultPipe, DictPipe, ElementPipe, GroupPipe, KeysPipe, LimitPipe, NonNullPipe, RangePipe, RemovePipe, MaxUpToPipe, ArrKeysPipe } from './pipes/data.pipe';
import { BitsPipe, BitSetPipe, BitAndPipe, BitOrPipe, BitShiftRightPipe, BitShiftLeftPipe, NotPipe, SomePipe, DivCeilPipe } from './pipes/logical.pipe';
import { DatePipe, HtmlPipe, FixedNumPipe } from './pipes/output.pipe';
import { DocsPipe, ResourcePipe, LocalePipe, DataPipe, TranslatePipe } from './pipes/service.pipe';
import { ReplacePipe, PercentPipe, ToPipe, ToNumPipe, ToRGBAPipe } from './pipes/strings.pipe';
import { PcPipe } from './pipes/pc.pipe';
import { CondAstPipe } from './pipes/conditions.pipe';

import { LuJsonService } from './services/lu-json.service';
import { LuResService } from './services/lu-res.service';
import { LuDocsService } from './services/lu-docs.service';
import { LuLocaleService } from './services/lu-locale.service';
import { LuxVarDirective } from './lux-var.directive';

export { LuJsonService, LuResService, LuDocsService, LuLocaleService };

@NgModule({
  declarations: [
    PaginationComponent, DataTableComponent, GithubSpaComponent, IconComponent,
    DefaultPipe, DictPipe, ElementPipe, GroupPipe, KeysPipe, ArrKeysPipe, NonNullPipe, RangePipe, RemovePipe, LimitPipe, ArraySortPipe, ArraySortNumPipe, MaxUpToPipe,
    BitsPipe, BitSetPipe, BitAndPipe, BitOrPipe, BitShiftRightPipe, BitShiftLeftPipe, NotPipe, SomePipe, DivCeilPipe,
    DatePipe, HtmlPipe, FixedNumPipe,
    DocsPipe, ResourcePipe, LocalePipe, DataPipe, TranslatePipe,
    ReplacePipe, PercentPipe, ToPipe, ToNumPipe, ToRGBAPipe,
    PcPipe, CondAstPipe,
    LuxVarDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    PaginationComponent, DataTableComponent, GithubSpaComponent, IconComponent,
    DefaultPipe, DictPipe, ElementPipe, GroupPipe, KeysPipe, ArrKeysPipe, NonNullPipe, RangePipe, RemovePipe, ArraySortPipe, ArraySortNumPipe,
    LimitPipe, MaxUpToPipe,
    BitsPipe, BitSetPipe, BitAndPipe, BitOrPipe, BitShiftRightPipe, BitShiftLeftPipe, NotPipe, SomePipe, DivCeilPipe,
    DatePipe, HtmlPipe, FixedNumPipe,
    DocsPipe, ResourcePipe, LocalePipe, DataPipe, TranslatePipe,
    ReplacePipe, PercentPipe, ToPipe, ToNumPipe, ToRGBAPipe,
    PcPipe, CondAstPipe,
    LuxVarDirective,
  ]
})
export class UtilModule { }
