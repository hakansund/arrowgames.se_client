import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RulesService } from './rules.service';
import { Rule } from './rule';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  ruleForm: FormGroup;
  editForm: FormGroup;
  rules: Rule[];
  errorMessage: string;
  editing: boolean = false;
  delete: boolean = false;
  editedRule: Rule;

  constructor(private formBuilder: FormBuilder, private rulesService: RulesService) { }

  ngOnInit() {
    this.buildForms();
    this.getRules();
  }

  getRules() {
    this.rulesService.getRules()
                     .subscribe(
                        rules => this.rules = rules,
                        error =>  this.errorMessage = <any>error);
  }

  buildForms() {
    this.ruleForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ''
    });
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ''
    });
  }

  resetRuleForm() {
    this.ruleForm.controls['title'].setValue('');
    this.ruleForm.controls['text'].setValue('');
  }

  resetEditForm() {
    this.editForm = null;
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ''
    });
    this.editing = false;
  }

  onSubmitNew() {
    this.rulesService.addRule(this.ruleForm.value)
                      .subscribe(
                        rule  => { this.getRules(); this.resetRuleForm(); },
                        error => console.log(error));
  }

  onSubmitEdit() {
    this.editedRule.title = this.editForm.value.title;
    this.editedRule.text = this.editForm.value.text;
    this.rulesService.updateRule(this.editedRule)
                     .subscribe(
                       rule => { this.getRules(); this.resetEditForm(); },
                       error => console.log(error));
  }

  edit(rule: Rule) {
    this.editedRule = rule;
    this.editForm.controls['title'].setValue(this.editedRule.title);
    this.editForm.controls['text'].setValue(this.editedRule.text);
    this.editing = true;
  }

  deleteRule(id: string) {
    this.rulesService.deleteRule(id)
                     .subscribe(
                       rule  => { this.getRules(); this.delete = false; },
                       error => console.log(error));
  }

  reset() {
    this.delete = false;
    this.editing = false;
  }


}
