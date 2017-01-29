import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './user';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];
  selectedUser: User;
  delete: boolean = false;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
    this.getUsers();
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.minLength(5)],
      password: ['', Validators.required]
    });
  }

  resetUserForm() {
    this.userForm = null;
    this.buildForm();
  }

  getUsers() {
  this.adminService.getUsers()
                   .subscribe(
                     users => this.users = users,
                     error =>  console.log(error));
  }

  deleteUser(id: string) {
    this.adminService.deleteUser(id)
                     .subscribe(
                       user  => { this.getUsers(); this.reset(); },
                       error => console.log(error));
  }

  onSubmit() {
    this.adminService.addUser(this.userForm.value)
                  .subscribe(
                    user  => { this.getUsers(); this.resetUserForm(); },
                    error => console.log(error)
                    );
  }

  reset() {
    this.delete = false;
  }

}
