import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustLoginServiceService {

  constructor(private http: HttpClient) { }
  public customerLogin(customerloginData: any){
    return this.http.post("http://localhost:8080/cust/login",customerloginData);
    }
}
