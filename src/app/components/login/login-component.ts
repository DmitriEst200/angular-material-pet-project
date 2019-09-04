import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'login',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent extends BaseComponent implements OnInit{
  hidePass = true;
  model: any = {};

  constructor(private authentificationService: AuthentificationService,
              private router: Router){
    super();
  }

  switchPassVisibility() {
    this.hidePass = !this.hidePass;
  }
  
  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    this.authentificationService
      .signIn(this.model.email, this.model.password)
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          const id = data["id"];
          this.router.navigate(["/welcome", id]);
        },
        error => {
          this.errorMessage = "Can't log in in this resource";
        }
    );
  }
}
