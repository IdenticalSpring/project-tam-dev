import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = `${environment.apiUrl}/message`;

  constructor(private http: HttpClient) { }

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}`);
  }

  getMessageById(id: number): Observable<Message> {
    return this.http.get<Message>(`${this.apiUrl}/${id}`);
  }

  createMessage(message: Message): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, message);
  }

  updateMessage(id: number, message: Message): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, message);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
