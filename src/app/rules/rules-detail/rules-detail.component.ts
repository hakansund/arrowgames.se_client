import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Rule, EditedRule } from '../rule';
import { RulesService } from '../rules.service';

@Component({
  selector: 'app-rules-detail',
  templateUrl: './rules-detail.component.html',
  styleUrls: ['./rules-detail.component.css']
})
export class RulesDetailComponent implements OnInit {

  @Input() rule: Rule;
  @Output() newRule: EventEmitter<EditedRule> = new EventEmitter<EditedRule>();
  @Output() deleteRule: EventEmitter<String> = new EventEmitter<String>();
  @Output() editRule: EventEmitter<any> = new EventEmitter<any>();

  editing: boolean = false;
  editedRule: EditedRule = { title: '', text: '' };

  constructor(private rulesService: RulesService, private modalService: NgbModal) { }

  ngOnInit() { }

  onSubmitNew() {
    this.newRule.emit(this.editedRule);
    this.editedRule = { title: '', text: '' };
  }

  keyupNew(text) {
    this.editedRule.text = text;
  }

  onSubmitEdit() {
    this.editRule.emit();
    this.edit();
  }

  keyupEdit(text) {
    this.rule.text = text;
  }

  onDelete() {
    this.deleteRule.emit(this.rule._id);
  }

  open(content) {
    this.modalService.open(content, { size: 'sm' }).result.then(
        result => this.onDelete()
    );
  }

  edit() {
    this.editing = !this.editing;
  }

}
