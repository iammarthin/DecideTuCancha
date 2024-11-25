import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly apiUrl = 'https://fdc9a8e6-1c79-4766-9ba6-f67944405756.mock.pstmn.io/api/Usuarios';

  private loggedUserSubject = new BehaviorSubject<any>(this.getLoggedUser());
  public loggedUser$: Observable<any> = this.loggedUserSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  __be_Users() {
    return this.http.get(this.apiUrl, { responseType: 'json' });
  }

  getLoggedUser(): any {
    const storedUser = localStorage.getItem('loggedUser');
    return storedUser ? JSON.parse(storedUser) : null;
  }

  login(user: any): void {
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.loggedUserSubject.next(user);
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
    this.loggedUserSubject.next(null);
  }
}
