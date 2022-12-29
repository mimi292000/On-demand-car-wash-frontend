import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CustRegisterComponent } from './cust-register/cust-register.component';
import { WasherRegisterComponent } from './washer-register/washer-register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminAddwashpackComponent } from './admin-addwashpack/admin-addwashpack.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminAllwashpackComponent } from './admin-allwashpack/admin-allwashpack.component';
import { AdminUpdatewashpackComponent } from './admin-updatewashpack/admin-updatewashpack.component';
import { AdminGetallusersComponent } from './admin-getallusers/admin-getallusers.component';
import { AdminGetallwashersComponent } from './admin-getallwashers/admin-getallwashers.component';
import { CustomerSidebarComponent } from './customer-sidebar/customer-sidebar.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { CustMyprofileComponent } from './cust-myprofile/cust-myprofile.component';
import { CustAddorderComponent } from './cust-addorder/cust-addorder.component';
import { CustMyordersComponent } from './cust-myorders/cust-myorders.component';
import { CustWpComponent } from './cust-wp/cust-wp.component';
import {MatCardModule} from '@angular/material/card';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WasherLoginComponent } from './washer-login/washer-login.component';


@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
         RegisterComponent,
         CustRegisterComponent,
         WasherRegisterComponent,
         HomeComponent,
         NavbarComponent,
         AdminAddwashpackComponent,
         AdminDashboardComponent,
         AdminSidebarComponent,
         AdminAllwashpackComponent,
         AdminUpdatewashpackComponent,
         AdminGetallusersComponent,
         AdminGetallwashersComponent,
         CustomerSidebarComponent,
         CustDashboardComponent,
         CustMyprofileComponent,
         CustAddorderComponent,
         CustMyordersComponent,
         CustWpComponent,
         AdminLoginComponent,
         ContactusComponent,
         AboutusComponent,
         WasherLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
