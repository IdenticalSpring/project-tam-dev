import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { OrderStatus } from '../models/order-status.model';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {
  private apiUrl = `${environment.apiUrl}/orderstatus`;

  constructor(private http: HttpClient) { }

  getAllOrderStatuses(): Observable<OrderStatus[]> {
    return this.http.get<OrderStatus[]>(`${this.apiUrl}`);
  }

  getOrderStatusById(id: number): Observable<OrderStatus> {
    return this.http.get<OrderStatus>(`${this.apiUrl}/${id}`);
  }

  createOrderStatus(orderStatus: OrderStatus): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, orderStatus);
  }

  updateOrderStatus(id: number, orderStatus: OrderStatus): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, orderStatus);
  }

  deleteOrderStatus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
