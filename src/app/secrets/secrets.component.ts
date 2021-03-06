import { Component, OnInit, NgZone } from '@angular/core';
import { SecretsService         } from '../services/secrets.service';
import { SessionService         } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.css']
})
export class SecretsComponent implements OnInit {
  secrets: any;
  user: any

  constructor(
    private secret : SecretsService,
    private route  : ActivatedRoute,
    private session: SessionService

  ) { }

  ngOnInit() {
    if (this.session.user){
      this.user = this.session.user;
    }
    console.log("ngOnInit:", this.user);
    this.showSecrets()
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

showSecrets() {
  this.secret.getSecret()
    .subscribe((secrets) => {
      this.secrets = secrets
      console.log("showSecrets function", this.secrets)

    });

}


}
