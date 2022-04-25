import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { UserExistService } from './user-exist.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly newUserService: NewUserService,
    private readonly userExist: UserExistService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required], [this.userExist.checkUserExist()]],
      password: ['', [Validators.required]],
      userType: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  signUp() {
    if (this.newUserForm.valid) {
      const novoUsuario = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(novoUsuario).subscribe({
        next: () => this.router.navigate(['']),
        error: (e) => console.error(e),
      });
    }
  }
}
