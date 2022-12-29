import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminAddwashpackComponent } from './admin-addwashpack/admin-addwashpack.component';
import { AdminAllwashpackComponent } from './admin-allwashpack/admin-allwashpack.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustAddorderComponent } from './cust-addorder/cust-addorder.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { CustRegisterComponent } from './cust-register/cust-register.component';
import { CustWpComponent } from './cust-wp/cust-wp.component';
import { CustomerSidebarComponent } from './customer-sidebar/customer-sidebar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WasherLoginComponent } from './washer-login/washer-login.component';
import { WasherRegisterComponent } from './washer-register/washer-register.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent,
  pathMatch:'full'},
  {path:'admin-register',
  component:RegisterComponent,
  pathMatch:'full'},
  {path:'customer-register',
  component:CustRegisterComponent,
  pathMatch:'full'},
  {path:'washer-register',
  component:WasherRegisterComponent,
  pathMatch:'full'},
  {path:'customer-login',
  component:LoginComponent,
  pathMatch:'full'},
  {path:'customer-addorder',
  component:CustAddorderComponent,
  pathMatch:'full'},
  {path:'customer-dashboard',
  component:CustDashboardComponent,
  pathMatch:'full'},
  {path:'customer-viewwashpack',
  component:CustWpComponent,
  pathMatch:'full'},
  {path:'admin-dashboard',
  component:AdminDashboardComponent,
  pathMatch:'full'},
  {path:'admin-sidebar',
  component:AdminSidebarComponent,
  pathMatch:'full'},
  {path:'customer-sidebar',
  component:CustomerSidebarComponent,
  pathMatch:'full'},
  {path:'admin-login',
  component:AdminLoginComponent,
  pathMatch:'full'},
  {path:'admin-addwashpack',
  component:AdminAddwashpackComponent,
  pathMatch:'full'},
  {path:'admin-viewwashpack',
  component:AdminAllwashpackComponent,
  pathMatch:'full'},
  {path:'aboutus',
  component:AboutusComponent,
  pathMatch:'full'},
  {path:'contact',
  component:ContactusComponent,
  pathMatch:'full'},
  {path:'washer-login',
  component:WasherLoginComponent,
  pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
