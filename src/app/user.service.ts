import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }
  public UserService(userserviceData: any){
    return this.http.post("http://localhost:8080/cust/addorder",userserviceData);
    }
}
