import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Staff } from '../models/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = `${environment.apiUrl}/staff`;

  constructor(private http: HttpClient) { }

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiUrl}`);
  }

  getStaffById(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/${id}`);
  }

  createStaff(staff: Staff): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, staff);
  }

  updateStaff(id: number, staff: Staff): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, staff);
  }

  deleteStaff(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
