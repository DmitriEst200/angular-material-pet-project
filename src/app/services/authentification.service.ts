import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService extends BaseService{

  constructor(protected http: HttpClient,
              private router: Router) {
    super(http);
  }

  signIn(email: string, password: string){
    return this.http.post<Observable<Object>>(this.getApiContext() + "/auth", {
      email: email,
      password: password
    });
  }
}
