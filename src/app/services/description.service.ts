import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Description } from '../models/description.model';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  private apiUrl = `${environment.apiUrl}/description`;

  constructor(private http: HttpClient) { }

  getAllDescriptions(): Observable<Description[]> {
    return this.http.get<Description[]>(`${this.apiUrl}`);
  }

  getDescriptionById(id: number): Observable<Description> {
    return this.http.get<Description>(`${this.apiUrl}/${id}`);
  }

  createDescription(description: Description): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, description);
  }

  updateDescription(id: number, description: Description): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, description);
  }

  deleteDescription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
