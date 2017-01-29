import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SheetsComponent } from './sheets.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'sheets',
    component: SheetsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SheetsRoutingModule { }
