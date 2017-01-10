import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../user';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  @Input() user: User;
  @Output() newUser: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteUser: EventEmitter<String> = new EventEmitter<String>();

  userForm: FormGroup;

  constructor (private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.newUser.emit(this.userForm.value);
  }

  onDelete() {
    this.buildForm();
    this.deleteUser.emit(this.user._id);
  }

  open(content) {
    this.modalService.open(content, { size: 'sm' }).result.then(
        result => this.onDelete()
    );
  }

}
