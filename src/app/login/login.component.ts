import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'kbhalla22'
password= ''
errorMessage='Invalid Credentials'
invalidLogin=false

//Router
//dependancy injection
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    //console.log(this.username);
if (this.username==='kbhalla22' && this.password===''){
  this.router.navigate(['welcome',this.username])
  this.invalidLogin=false
}else {
  this.invalidLogin=true
}
  }
}
