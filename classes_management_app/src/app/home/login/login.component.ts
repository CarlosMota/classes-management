import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  loginMessage = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  signIn() {
    this.authService.signIn(this.userName, this.password).subscribe({
      next: () => {
        this.loginMessage = '';
        this.router.navigate(['scheduling']);
      },
      error: (e) =>
        (this.loginMessage = 'Login Inválido, por favor, tente novamente'),
      complete: () => console.log('complete'),
    });
  }
}
