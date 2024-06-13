import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ImportProduct } from '../models/import-product.model';

@Injectable({
  providedIn: 'root'
})
export class ImportProductService {
  private apiUrl = `${environment.apiUrl}/importproduct`;

  constructor(private http: HttpClient) { }

  getAllImportProducts(): Observable<ImportProduct[]> {
    return this.http.get<ImportProduct[]>(`${this.apiUrl}`);
  }

  getImportProductById(id: number): Observable<ImportProduct> {
    return this.http.get<ImportProduct>(`${this.apiUrl}/${id}`);
  }

  createImportProduct(importProduct: ImportProduct): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, importProduct);
  }

  updateImportProduct(id: number, importProduct: ImportProduct): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, importProduct);
  }

  deleteImportProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
