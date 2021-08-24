import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {
  SessionValue:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.SessionValue = sessionStorage.getItem("email");
    if(this.SessionValue == null ){
      this.router.navigate(['gym/login']);
    }
  }

  logout(){
    sessionStorage.removeItem("email");
    this.router.navigate(['gym/login']);
  }

}
