import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = `${environment.apiUrl}/service`;

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}`);
  }

  getServiceById(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.apiUrl}/${id}`);
  }

  createService(service: Service): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, service);
  }

  updateService(id: number, service: Service): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, service);
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
