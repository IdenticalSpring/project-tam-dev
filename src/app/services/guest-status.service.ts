import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GuestStatus } from '../models/guest-status.model';

@Injectable({
  providedIn: 'root'
})
export class GuestStatusService {
  private apiUrl = `${environment.apiUrl}/gueststatus`;

  constructor(private http: HttpClient) { }

  getAllGuestStatuses(): Observable<GuestStatus[]> {
    return this.http.get<GuestStatus[]>(`${this.apiUrl}`);
  }

  getGuestStatusById(id: number): Observable<GuestStatus> {
    return this.http.get<GuestStatus>(`${this.apiUrl}/${id}`);
  }

  createGuestStatus(guestStatus: GuestStatus): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, guestStatus);
  }

  updateGuestStatus(id: number, guestStatus: GuestStatus): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, guestStatus);
  }

  deleteGuestStatus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
