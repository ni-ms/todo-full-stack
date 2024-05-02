import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {HardcodedAuthService} from "../../services/hardcoded-auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'TestUser';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  hardcodedAuthenticationService = inject(HardcodedAuthService);
  router= inject(Router);
  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
