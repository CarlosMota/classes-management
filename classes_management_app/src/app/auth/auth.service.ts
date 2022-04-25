import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpclient: HttpClient,
    private readonly userService: UserService
  ) {}

  signIn(userName: string, password: string): Observable<HttpResponse<any>> {
    return this.httpclient
      .post(
        'http://localhost:3000/auth/signin',
        {
          userName: userName,
          password: password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const authtoken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authtoken);
        })
      );
  }
}
