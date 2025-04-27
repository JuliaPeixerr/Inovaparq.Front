import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private router: Router) { }

    navigateHome() {
      this.router.navigate(['/home']);  
    }
}