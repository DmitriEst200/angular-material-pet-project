import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent{
  hidePass = true;

  switchPassVisibility(){
    this.hidePass = !this.hidePass;
  }
}
