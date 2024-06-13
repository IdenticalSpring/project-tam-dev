import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Brand } from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = `${environment.apiUrl}/brand`;

  constructor(private http: HttpClient) { }

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}`);
  }

  getBrandById(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.apiUrl}/${id}`);
  }

  getBrandByName(name: string): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/GetByName`, { params: { name } });
  }

  getBrandsByCategory(cateId: number): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/GetByCategory/${cateId}`);
  }

  createBrand(brand: Brand): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, brand);
  }

  updateBrand(id: number, brand: Brand): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, brand);
  }

  deleteBrand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
