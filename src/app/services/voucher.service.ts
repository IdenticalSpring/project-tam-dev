import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Voucher } from '../models/voucher.model';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  private apiUrl = `${environment.apiUrl}/voucher`;

  constructor(private http: HttpClient) { }

  getAllVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(`${this.apiUrl}`);
  }

  getVoucherById(id: string): Observable<Voucher> {
    return this.http.get<Voucher>(`${this.apiUrl}/${id}`);
  }

  createVoucher(voucher: Voucher): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, voucher);
  }

  updateVoucher(id: string, voucher: Voucher): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, voucher);
  }

  deleteVoucher(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
