import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  message : any;

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.user)
      .subscribe(result => {
				            if (result === true) {
			                // login successful
			                this.router.navigate(['api/secrets/featured']);
			         			} else {
                        // login failed
                        this.message = 'Username or password is incorrect';
				            }
				        });

  }
}
