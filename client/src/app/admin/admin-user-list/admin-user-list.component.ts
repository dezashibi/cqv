import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs/Observable";
import {User} from "../../models/user";

@Component({
  selector: 'cqv-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
