import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private authGuardService: AuthGuard) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      confirm("This is just a sample template and currently doesn't require authentication. Click Sign In to proceed!");
    },1000);
  }

  loggedIn() {
    this.authGuardService.setLoginStatus();
  }
}
