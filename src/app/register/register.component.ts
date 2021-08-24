import { Component, OnInit } from '@angular/core';
import { GymserviceService } from '../gymservice.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  customer!: Customer;
  message!: string;
  confirmPassword!: string;

  constructor(private service:GymserviceService) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  createCustomer(){
    this.service.createCustomer(this.customer).subscribe(
      data=>{
        this.message=data;
        this.customer=new Customer();
      },
      error=>{
        console.log(error);
        console.log(this.customer);
        this.customer=new Customer;
      }
    );
  }
}
