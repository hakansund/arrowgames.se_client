import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  errorMessage: string;
  users: User[];
  selectedUser: User;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
  this.adminService.getUsers()
                   .subscribe(
                     users => this.users = users,
                     error =>  this.errorMessage = <any>error);
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  onClear() {
    this.selectedUser = null;
  }

  onNewUser(newUser: User) {
    this.adminService.addUser(newUser)
                     .subscribe(
                       user  => { this.getUsers(); this.onSelect(user); },
                       error => console.log(error));
  }

  onDeleteUser(id: String) {
    this.adminService.deleteUser(id)
                     .subscribe(
                       user  => { this.getUsers(); this.onClear(); },
                       error => console.log(error));
  }


}
