import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';
import {AuthInterceptor} from './auth.interceptor';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserPageComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
