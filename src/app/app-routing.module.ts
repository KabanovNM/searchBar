import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent
  },
  {
    path: 'user/:login', component: UserPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

