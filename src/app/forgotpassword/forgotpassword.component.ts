import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { GymserviceService } from '../gymservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  customer!:Customer;
  response!:string;
  constructor(private service:GymserviceService) { }

  ngOnInit(): void {
    this.customer=new Customer();
  }

  resetPassword(){
    this.service.resetPassword(this.customer).subscribe(
      data=>{
        this.response=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
