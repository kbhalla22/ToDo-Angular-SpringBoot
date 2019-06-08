import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  authenticate( username,password){
    //console.log('before ' + this.isUserLoggedIn());
    if (username==='kbhalla22' && password===''){
      sessionStorage.setItem('authenticateUser',username);
      //console.log('after ' +this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  executeAuthenticationService(username,password){
    
    let basicAuthHeaderString ='Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
    let headers=new HttpHeaders(
      {
        Authorization:basicAuthHeaderString
      }
    )
return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
{headers});
  }
  
  
  isUserLoggedIn(){
let user=sessionStorage.getItem('authenticateUser')
return!(user===null);
  }
  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
 
}
export class AuthenticationBean{
  constructor(public message:string){

  }
}