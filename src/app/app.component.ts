import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';

import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private dialog: MdDialog) { }

  ngOnInit() { }

  onLogOut() {
    this.authService.logout();
  }

  openDialog() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(loginData => {
      this.authService.login(loginData.username, loginData.password)
      .subscribe(
        result => console.log(result),
        error => console.log(error)
        );
    });
  }

}
