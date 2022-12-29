import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WasherServiceService } from '../washer-service.service';

@Component({
  selector: 'app-washer-login',
  templateUrl: './washer-login.component.html',
  styleUrls: ['./washer-login.component.css']
})
export class WasherLoginComponent implements OnInit {

  constructor(private washlogin: WasherServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(registerForm: NgForm){
    this.washlogin.washerLogin(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
      },
      (err) => {
        console.log(err);

      }
    );
    alert("Washer successfully logged in");

  }
}
