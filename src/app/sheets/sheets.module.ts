import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SheetsComponent } from './sheets.component';
import { SheetsRoutingModule } from './sheets-routing.module';
import { SheetsListComponent } from './sheets-list/sheets-list.component';
import { SheetsDetailComponent } from './sheets-detail/sheets-detail.component';
import { SheetsService } from './sheets.service';

@NgModule({
  imports: [
    CommonModule,
    SheetsRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    SheetsComponent,
    SheetsListComponent,
    SheetsDetailComponent
  ],
  providers: [
    SheetsService
  ]
})
export class SheetsModule { }
