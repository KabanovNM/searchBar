import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        Authorization:  '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',
        Accept: 'application/vnd.github.v3.raw+json',
      })
    });
    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Server response');
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          console.log('Error: ', err.status);
        }
      })
    );
  }
}
