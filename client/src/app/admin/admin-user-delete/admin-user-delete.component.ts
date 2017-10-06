import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'cqv-admin-user-delete',
  templateUrl: './admin-user-delete.component.html',
  styleUrls: ['./admin-user-delete.component.css']
})
export class AdminUserDeleteComponent implements OnInit, OnDestroy {

    id: any;
    params: any;


    constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
        this.userService.deleteUser(this.id).subscribe(
            data => {
                console.log(data);
                this.router.navigate(['/admin/users']);
            },
            error => console.log(<any>error));
    }

    ngOnDestroy() {
        this.params.unsubscribe();
    }

}
