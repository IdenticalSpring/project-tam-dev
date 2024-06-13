import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PostStatus } from '../models/post-status.model';

@Injectable({
  providedIn: 'root'
})
export class PostStatusService {
  private apiUrl = `${environment.apiUrl}/poststatus`;

  constructor(private http: HttpClient) { }

  getAllPostStatuses(): Observable<PostStatus[]> {
    return this.http.get<PostStatus[]>(`${this.apiUrl}`);
  }

  getPostStatusById(id: number): Observable<PostStatus> {
    return this.http.get<PostStatus>(`${this.apiUrl}/${id}`);
  }

  createPostStatus(postStatus: PostStatus): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, postStatus);
  }

  updatePostStatus(id: number, postStatus: PostStatus): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, postStatus);
  }

  deletePostStatus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
