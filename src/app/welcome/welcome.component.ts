import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message='welcome to my app';
  name=''

  //activatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.message);
    //console.log(this.route.snapshot.params['name'])
   this.name =this.route.snapshot.params['name']
  }
getWelcomeMessage(){
  console.log("get welcome message");
}
}
