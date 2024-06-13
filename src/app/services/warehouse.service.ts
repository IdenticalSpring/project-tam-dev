import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Warehouse } from '../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private apiUrl = `${environment.apiUrl}/warehouse`;

  constructor(private http: HttpClient) { }

  getAllWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${this.apiUrl}`);
  }

  getWarehouseById(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${this.apiUrl}/${id}`);
  }

  createWarehouse(warehouse: Warehouse): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, warehouse);
  }

  updateWarehouse(id: number, warehouse: Warehouse): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, warehouse);
  }

  deleteWarehouse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
