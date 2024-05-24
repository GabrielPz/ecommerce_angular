import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private apiUrl = 'https://backendangularproject.onrender.com/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): boolean {
    this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      .subscribe(users => {
        if (users.length > 0) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      });
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
