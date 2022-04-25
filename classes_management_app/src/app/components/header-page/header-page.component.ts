import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user/user.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css'],
})
export class HeaderPageComponent implements OnInit {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  user$ = this.userService.returnUser();

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
