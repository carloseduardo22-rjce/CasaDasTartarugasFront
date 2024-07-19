import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }

  loginGoogle() {
    google.accounts.id.initialize({
      client_id: '',
      callback: (resp: any) => {

      }
    });

    google.accounts.id.prompt();
  }

}
