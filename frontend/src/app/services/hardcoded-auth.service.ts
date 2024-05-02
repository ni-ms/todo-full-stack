import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() {
  }

  authenticate(username: string, password: string) {
    if (username === 'TestUser' && password === 'TestPassword') {
      // Session storage resets on browser close.
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return user !== null;
  }
  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
