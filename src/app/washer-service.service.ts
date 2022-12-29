import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WasherServiceService {

  constructor(private http: HttpClient) { }
  public registerWasher(washerData: any){
    return this.http.post("http://localhost:8082/wash/addwasher",washerData);
    }
    public washerLogin(washerloginData: any){
      return this.http.post("http://localhost:8082/wash/login",washerloginData);
      }
}
