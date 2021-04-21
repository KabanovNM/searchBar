import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  search = '';

  constructor(
    public usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.usersService.getUsers().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
