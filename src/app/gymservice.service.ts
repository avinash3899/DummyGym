import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class GymserviceService {
  private basePath = 'http://localhost:12345/gym';
  
  constructor(private http: HttpClient) { }


  createCustomer(customer:Customer):Observable<any>{
    return this.http.post(`${this.basePath}/createCustomer`, customer, {responseType: 'text'});
  }

  sendMessage(message:Contact):Observable<any>{
    return this.http.post(`${this.basePath}/sendMessage`, message, {responseType: 'text'});
  }

  
}
