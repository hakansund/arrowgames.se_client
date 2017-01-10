import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Sheet } from '../sheet';

@Component({
  selector: 'app-sheets-detail',
  templateUrl: './sheets-detail.component.html',
  styleUrls: ['./sheets-detail.component.css']
})
export class SheetsDetailComponent implements OnInit {

  @Input() sheet: Sheet;
  @Output() newSheet: EventEmitter<Sheet> = new EventEmitter<Sheet>();
  @Output() deleteSheet: EventEmitter<String> = new EventEmitter<String>();

  sheetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.buildForm();
   }

  buildForm() {
    this.sheetForm = this.formBuilder.group({
      name: ['', Validators.required],
      archetype: ['', Validators.required],
      appearance: '',
      skills: this.formBuilder.group({
        fighting: 1,
        movement: 1,
        social: 1,
        learning: 1,
        tech: 1
      })
    });
  }

  onSubmit() {
    this.newSheet.emit(this.sheetForm.value);
    this.buildForm();
  }

  onDelete() {
    this.buildForm();
    this.deleteSheet.emit(this.sheet._id);
  }

    open(content) {
    this.modalService.open(content, { size: 'sm' }).result.then(
        result => this.onDelete()
    );
  }

}
