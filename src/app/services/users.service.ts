import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {User} from '../interfaces';
import {mergeMap, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://api.github.com/users`)
      .pipe(
        mergeMap(users => {
          const usersObservable = users.map(user => this.getUser(user.login));
          return forkJoin(usersObservable);
        }),
        tap(users => this.users = users)
      );
  }

  getUser(userName: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${userName}`);
  }

  getProjects(login: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${login}/repos`);
  }
}

