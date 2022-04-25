import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private readonly http: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    console.log(newUser);
    return this.http.post(environment.apiBaseUrl + '/auth/signup', newUser);
  }

  checkUserAlreadyExist(userName: string) {
    return this.http.post(
      environment.apiBaseUrl + '/auth/checkUserName',
      userName
    );
  }
}
