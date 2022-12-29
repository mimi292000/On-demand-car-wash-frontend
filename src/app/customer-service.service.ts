import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }
  public registerCustomer(customerData: any){
    return this.http.post("http://localhost:8080/cust/adduser",customerData);
    }
    public getallwp() {
      return this.http.get('http://localhost:8080/cust/allpacks');
    }
    
}
