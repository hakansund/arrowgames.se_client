import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SheetsComponent } from './sheets.component';
import { SheetsRoutingModule } from './sheets-routing.module';
import { SheetsService } from './sheets.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SheetsRoutingModule,
  ],
  declarations: [
    SheetsComponent
  ],
  providers: [
    SheetsService
  ]
})
export class SheetsModule { }
