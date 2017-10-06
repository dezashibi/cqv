import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cqv-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userType: string;

  constructor() { }

  ngOnInit() {
    this.userType = localStorage.getItem('userType');
  }

}
