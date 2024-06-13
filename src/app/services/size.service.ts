import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Size } from '../models/size.model';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  private apiUrl = `${environment.apiUrl}/size`;

  constructor(private http: HttpClient) { }

  getAllSizes(): Observable<Size[]> {
    return this.http.get<Size[]>(`${this.apiUrl}`);
  }

  getSizeById(id: number): Observable<Size> {
    return this.http.get<Size>(`${this.apiUrl}/${id}`);
  }

  createSize(size: Size): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, size);
  }

  updateSize(id: number, size: Size): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, size);
  }

  deleteSize(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
