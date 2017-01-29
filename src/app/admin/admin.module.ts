import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent],
  providers: [AdminService]
})
export class AdminModule { }
