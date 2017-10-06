import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cqv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userForm: FormGroup;
    passwordControl: FormControl;
    usernameControl: FormControl;
    token: string;
    status: string;
    message: string;

    constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.passwordControl = fb.control('', [Validators.required, Validators.minLength(6)]);
        this.usernameControl = fb.control('', [Validators.required]);

        this.userForm = fb.group({
            username: this.usernameControl,
            password: this.passwordControl
        });
    }

    ngOnInit() {
    }

    login() {
        this.authService.login(this.userForm.value)
            .subscribe(
                response  => {
                    console.log(response);
                    if (response === true) {
                        this.router.navigate(['/admin']);
                    } else {
                        this.status = 'error';
                        this.message = 'Username or password is incorrect';
                    }
                },
                error =>  {
                    console.log(<any>error);
                    this.status = 'error';
                    this.message = error['message'];
                }
            );
    }

}
