import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CarwashServiceService } from '../carwash-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private carwashservice: CarwashServiceService, private router: Router
    ) { }

  ngOnInit(): void {
  }
  register(registerForm: NgForm){
    this.carwashservice.registerAdmin(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
      },
      (err) => {
        console.log(err);
        
      }
    );
    alert("Admin successfully registered");
    this.router.navigate(['/', 'admin-login']);
  }
}
