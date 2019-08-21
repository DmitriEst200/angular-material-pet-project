import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export abstract class BaseService{
  baseHref = environment.baseHref;
  apiContext = environment.apiContext;

  constructor(protected http: HttpClient) {
  }

  protected getBaseHref(): string {
    return this.baseHref;
  }

  protected getApiContext(): string {
    console.log(this.apiContext);
    return this.apiContext;
  }

  protected jwt(params?: any): any {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.jwt) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': currentUser.jwt
        }),
        params: params
      };
    }
  }
}
