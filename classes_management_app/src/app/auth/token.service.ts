import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private readonly http: HttpClient) {}

  returnToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  returnBearerToken() {
    const token = this.returnToken();
    /**{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    } */
    return new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', `Bearer ${token}`);
  }

  saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(KEY);
  }

  hasToken() {
    return !!this.returnToken();
  }
}
