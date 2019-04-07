import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination/pagination.component';
import { DataTableComponent } from './data-table/data-table.component';
import { GithubSpaComponent } from './github-spa/github-spa.component';
import { IconComponent } from './icon/icon.component';

import { KeysPipe, DictPipe, RangePipe, ElementPipe, RemovePipe, NonNullPipe } from './pipes/data.pipe';
import { BitSetPipe, BitAndPipe, BitOrPipe, BitShiftRightPipe, BitShiftLeftPipe, NotPipe, SomePipe } from './pipes/logical.pipe';
import { DatePipe, HtmlPipe } from './pipes/output.pipe';
import { DocsPipe, ResourcePipe } from './pipes/service.pipe';
import { ReplacePipe, PercentPipe, ToPipe } from './pipes/strings.pipe';

import { LuJsonService } from './services/lu-json.service';
import { LuResService } from './services/lu-res.service';
import { LuDocsService } from './services/lu-docs.service';
import { LuLocaleService } from './services/lu-locale.service';

@NgModule({
  declarations: [
    PaginationComponent, DataTableComponent, GithubSpaComponent, IconComponent,
    KeysPipe, DictPipe, RangePipe, ElementPipe, RemovePipe, NonNullPipe,
    BitSetPipe, BitAndPipe, BitOrPipe, BitShiftRightPipe, BitShiftLeftPipe, NotPipe, SomePipe,
    DatePipe, HtmlPipe,
    DocsPipe, ResourcePipe,
    ReplacePipe, PercentPipe, ToPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    PaginationComponent, DataTableComponent, GithubSpaComponent, IconComponent,
    KeysPipe, DictPipe, RangePipe, ElementPipe, RemovePipe, NonNullPipe,
    BitSetPipe, BitAndPipe, BitOrPipe, BitShiftRightPipe, BitShiftLeftPipe, NotPipe, SomePipe,
    DatePipe, HtmlPipe,
    DocsPipe, ResourcePipe,
    ReplacePipe, PercentPipe, ToPipe
  ]
})
export class UtilModule { }
