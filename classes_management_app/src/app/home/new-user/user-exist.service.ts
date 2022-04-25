import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserExistService {
  constructor(private readonly newUserService: NewUserService) {}

  checkUserExist() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((username) =>
          this.newUserService.checkUserAlreadyExist(username)
        ),
        map((userExist) => (userExist ? { userExist: true } : null)),
        first()
      );
    };
  }
}
