import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './signup/user-details/user-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[
    SignupComponent,
    UserDetailsComponent
  ]
})
export class AuthModule { }
