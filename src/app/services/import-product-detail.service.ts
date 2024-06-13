import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ImportProductDetail } from '../models/import-product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ImportProductDetailService {
  private apiUrl = `${environment.apiUrl}/importproductdetail`;

  constructor(private http: HttpClient) { }

  getAllImportProductDetails(): Observable<ImportProductDetail[]> {
    return this.http.get<ImportProductDetail[]>(`${this.apiUrl}`);
  }

  getImportProductDetailById(id: number): Observable<ImportProductDetail> {
    return this.http.get<ImportProductDetail>(`${this.apiUrl}/${id}`);
  }

  createImportProductDetail(importProductDetail: ImportProductDetail): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, importProductDetail);
  }

  updateImportProductDetail(id: number, importProductDetail: ImportProductDetail): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, importProductDetail);
  }

  deleteImportProductDetail(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
