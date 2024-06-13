import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Owner } from '../models/owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl = `${environment.apiUrl}/owner`;

  constructor(private http: HttpClient) { }

  getAllOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${this.apiUrl}`);
  }

  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.apiUrl}/${id}`);
  }

  createOwner(owner: Owner): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, owner);
  }

  updateOwner(id: number, owner: Owner): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, owner);
  }

  deleteOwner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
