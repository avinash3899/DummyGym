import { Component, OnInit } from '@angular/core';
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
  constructor(private service: GymserviceService) { }

  ngOnInit(): void { }

  loginvalidate() {
    this.service.loginvalidate(this.email, this.password).subscribe
      (
        data => {
          this.reply = data;
          if (this.reply == "success") {
            console.log("login successful");
          } else if (this.reply == "wrongPassword") {
            console.log("login unsuccessful wrong password");
          }
          else {
            console.log("account doesnt exist");
          }
        },
        error => {
          console.log(error);
        }
      )
  }

}
