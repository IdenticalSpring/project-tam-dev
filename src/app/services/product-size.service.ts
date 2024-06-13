import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductSize } from '../models/product-size.model';

@Injectable({
  providedIn: 'root'
})
export class ProductSizeService {
  private apiUrl = `${environment.apiUrl}/product-size`;

  constructor(private http: HttpClient) { }

  getAllProductSizes(): Observable<ProductSize[]> {
    return this.http.get<ProductSize[]>(`${this.apiUrl}`);
  }

  getProductSizeById(id: string): Observable<ProductSize> {
    return this.http.get<ProductSize>(`${this.apiUrl}/${id}`);
  }

  createProductSize(productSize: ProductSize): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, productSize);
  }

  updateProductSize(id: string, productSize: ProductSize): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, productSize);
  }

  deleteProductSize(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
