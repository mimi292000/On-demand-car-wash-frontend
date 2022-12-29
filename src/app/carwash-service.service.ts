import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarwashServiceService {

  constructor(private http: HttpClient) { }
  
  public registerAdmin(adminData: any){
  return this.http.post("http://localhost:8081/admin/addadmin",adminData);
  }
  public WashpackAdmin(adminData: any){
    return this.http.post("http://localhost:8081/admin/addpack",adminData);
    }
    public AdminLogin(adminData: any){
      return this.http.post("http://localhost:8081/admin/login",adminData);
      }
      public getallwashers() {
        return this.http.get('http://localhost:8081/admin/allwashers');
      }
      public getallwp() {
        return this.http.get('http://localhost:8081/admin/allpacks');
      }
      
}
