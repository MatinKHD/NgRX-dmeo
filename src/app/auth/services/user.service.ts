import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {UserInterface} from "../types/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUsers(): Observable<UserInterface[]> {
    const users: UserInterface[] = [
      {
        name: "Matin",
        lastName: "KHD",
        email: "matin@d.co",
        id: "asasdsadsad213352",
        isUserAdmin: true
      },
      {
        name: "Agbar",
        lastName: "Gachkari",
        email: "agbargachkari@d.co",
        id: "asasdsadsad21335asdasd2",
        isUserAdmin: false
      }
    ]
    return of(users).pipe(delay(2000))
  }
}
