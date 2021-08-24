import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymserviceService } from '../gymservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  reply!: string;
  constructor(private service: GymserviceService,private router: Router) { }

  ngOnInit(): void { }

  loginvalidate() {
    this.service.loginvalidate(this.email, this.password).subscribe
      (
        data => {
          this.reply = data;
          if (this.reply == "success") {
            sessionStorage.setItem("email",this.email);
            this.router.navigate(['gym/user']);
          } else if (this.reply == "wrongPassword") {
            alert("login unsuccessful wrong password");
          }
          else {
            alert("account doesnt exist");
          }
        },
        error => {
          console.log(error);
        }
      )
  }

}
