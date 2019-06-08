import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { nextContext } from '@angular/core/src/render3';
import { nextTick } from 'q';
import { NEXT } from '@angular/core/src/render3/interfaces/view';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceterBasicAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'karrybee'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    }
    )
    return  next.handle(request);
  }
  
}
