import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cqv-admin-user-create',
  templateUrl: './admin-user-create.component.html',
  styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent implements OnInit {

  userForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
      this.userForm = fb.group({
          name: fb.control('', [Validators.required, Validators.minLength(3)]),
          username: fb.control('', [Validators.required, Validators.minLength(3)]),
          password: fb.control('', [Validators.required, Validators.minLength(6)])
      });
  }

  ngOnInit() {
  }

  createUser() {
      this.userService.addUser(this.userForm.value)
          .subscribe(
              user => {
                  console.log(user);
                  this.router.navigate(['/admin/users']);
              },
              error => console.log(<any>error)
          );
  }

}
