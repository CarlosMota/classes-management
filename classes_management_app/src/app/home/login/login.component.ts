import { Component, OnInit } from '@angular/core';
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

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  signIn() {
    console.log(this.userName);
    this.router.navigate(['scheduling']);
    // this.authService.signIn(this.userName, this.password).subscribe({
    //   next: () => this.router.navigate(['scheduling']),
    //   error: (e) => console.error(e),
    //   complete: () => console.log('complete'),
    // });
  }
}
