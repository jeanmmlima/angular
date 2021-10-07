import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Credenciais } from './credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credenciais!: Credenciais;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    console.log(this.credenciais);
    this.authService.fazerLogin(this.credenciais);
  }

}
