import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = `${environment.apiUrl}/image`;

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}`);
  }

  getImageById(id: number): Observable<Image> {
    return this.http.get<Image>(`${this.apiUrl}/${id}`);
  }

  createImage(image: Image): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, image);
  }

  updateImage(id: number, image: Image): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, image);
  }

  deleteImage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
