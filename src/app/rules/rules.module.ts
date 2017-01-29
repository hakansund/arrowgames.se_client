import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { EditorModule, SharedModule } from 'primeng/primeng';

import { ConfirmationService } from 'primeng/primeng';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesService } from './rules.service';
import { RulesComponent } from './rules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    EditorModule,
    RulesRoutingModule
  ],
  declarations: [
    RulesComponent,
  ],
  providers: [
    RulesService
  ]
})
export class RulesModule { }
