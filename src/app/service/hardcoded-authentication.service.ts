import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username,password){
    if (username==='kbhalla22' && password===''){
      return true
    }
    return false;
  }
}
