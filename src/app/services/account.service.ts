import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = `${environment.apiUrl}/account`;

  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}`);
  }

  getAccountById(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${id}`);
  }

  banAccount(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/ban`, {});
  }

  unbanAccount(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/unban`, {});
  }

  searchAccounts(keyword: string): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}/search`, { params: { keyword } });
  }

  changePassword(id: number, newPassword: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/change-password`, { newPassword });
  }

  updateAccount(id: number, account: Account): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/update-profile`, account);
  }

  updateAvatar(id: number, avatar: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/${avatar}`, {});
  }
}
