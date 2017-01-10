import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesService } from './rules.service';
import { RulesComponent } from './rules.component';
import { RulesListComponent } from './rules-list/rules-list.component';
import { RulesDetailComponent } from './rules-detail/rules-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RulesRoutingModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    RulesComponent,
    RulesListComponent,
    RulesDetailComponent
  ],
  providers: [
    RulesService
  ]
})
export class RulesModule { }
