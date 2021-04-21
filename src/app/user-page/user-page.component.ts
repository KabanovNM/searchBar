import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {Project, User} from '../interfaces';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
  login: string;
  user: User;
  projects: Project[] = [];
  subscriptions: Subscription[];

  constructor(
    private route: ActivatedRoute,
    public usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    const subscription1$ = this.route.params.subscribe(
      params => (this.login = params.login)
    );

    const subscription2$ = this.usersService.getUser(this.login).subscribe((response) => {
      this.user = response;
    });

    const subscription3$ = this.usersService.getProjects(this.login).subscribe(response => {
      this.projects = response;
    });

    this.subscriptions = [subscription1$, subscription2$, subscription3$];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
