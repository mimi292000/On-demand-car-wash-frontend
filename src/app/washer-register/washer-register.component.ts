import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WasherServiceService } from '../washer-service.service';

@Component({
  selector: 'app-washer-register',
  templateUrl: './washer-register.component.html',
  styleUrls: ['./washer-register.component.css']
})
export class WasherRegisterComponent implements OnInit {
  

  constructor(private washerservice: WasherServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm){
    this.washerservice.registerWasher(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
    alert("Washer successfully registered");
   
    this.router.navigate(['/', 'washer-login']);
  }
}
