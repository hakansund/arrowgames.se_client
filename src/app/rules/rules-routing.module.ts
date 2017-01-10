import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RulesComponent } from './rules.component';
import { RulesListComponent } from './rules-list/rules-list.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'rules',
    component: RulesComponent,
    children: [
      {
        path: '',
        component: RulesListComponent
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
export class RulesRoutingModule { }