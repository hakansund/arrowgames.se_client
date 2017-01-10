import { Component, OnInit } from '@angular/core';

import { Rule, EditedRule } from '../rule';
import { RulesService } from '../rules.service';


@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.css']
})
export class RulesListComponent implements OnInit {

  errorMessage: string;
  rules: Rule[];
  selectedRule: Rule;

  constructor(private rulesService: RulesService) { }

  ngOnInit() {
    this.getRules();
  }

  getRules() {
  this.rulesService.getRules()
                   .subscribe(
                     rules => this.rules = rules,
                     error =>  this.errorMessage = <any>error);
  }

  onSelect(rule: Rule) {
    this.selectedRule = rule;
  }

  onClear() {
    this.selectedRule = null;
  }

  onNewRule(newRule: EditedRule) {
    this.rulesService.addRule(newRule)
                     .subscribe(
                       rule  => { this.getRules(); this.onSelect(rule); },
                       error => console.log(error));
  }

    onDeleteRule(id: String) {
    this.rulesService.deleteRule(id)
                     .subscribe(
                       rule  => { this.getRules(); this.onClear(); },
                       error => console.log(error));
  }

  onEditRule() {
    this.rulesService.updateRule(this.selectedRule)
                     .subscribe(
                       rule => console.log(rule),
                       error => console.log(error));
  }

}
