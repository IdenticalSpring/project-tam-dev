import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/category`;

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  getCategoriesByName(name: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/GetByName`, { params: { name } });
  }

  createCategory(category: Category): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, category);
  }

  updateCategory(id: number, category: Category): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
