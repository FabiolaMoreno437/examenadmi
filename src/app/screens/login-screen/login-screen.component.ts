import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  public username: string = "";
  public password:string = "";
  public type: String = "password";
  //public errors:any = {};

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {

  }

  public showPassword(){}

  public login(){
    this.router.navigate(["pregunta1"]);
  }

}
