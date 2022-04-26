import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../auth/token.service';
import { Schedules } from './scheduling';

@Injectable({
  providedIn: 'root',
})
export class SchedulingService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listScheduling(): Observable<Schedules> {
    const headers = this.tokenService.returnBearerToken();
    return this.http.get<Schedules>(environment.apiBaseUrl + '/schedules', {
      headers,
    });
  }
}
