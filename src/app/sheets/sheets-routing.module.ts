import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SheetsComponent } from './sheets.component';
import { SheetsListComponent } from './sheets-list/sheets-list.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'sheets',
    component: SheetsComponent,
    children: [
      {
        path: '',
        component: SheetsListComponent
      }
    ],
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
