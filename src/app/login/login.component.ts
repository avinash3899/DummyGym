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
  reply!: string[];
  constructor(private service: GymserviceService, private router: Router) { }

  ngOnInit(): void { }

  loginvalidate() {
    this.service.loginvalidate(this.email, this.password).subscribe
      (
        data => {
          this.reply = data;
          if (this.reply[0] == "success") {
            if (this.reply[2] == "no") {
              sessionStorage.setItem("email", this.reply[1]);
              sessionStorage.setItem("isAdmin",this.reply[2]);
              this.router.navigate(['gym/user']);
            } else if (this.reply[2] == "yes") {
              sessionStorage.setItem("email", this.reply[1]);
              sessionStorage.setItem("isAdmin",this.reply[2]);
              this.router.navigate(['gym/admin']);
            }
          } else if (this.reply[0] == "wrongPassword") {
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
