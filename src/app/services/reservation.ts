import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reservation {
  rut: string;
  firstName: string;
  lastName: string;
  phone: string;
  date: string;   // ISO string
  time: string;   // "HH:mm"
  tableId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  // 1. Forzamos a que sea string. Si process.env no existe, usa un string vacío o una URL local.
  private API_URL: string = process.env['API_URL'] || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  createReservation(data: Reservation): Observable<any> {
    // Ahora this.API_URL es garantizadamente un string
    return this.http.post<any>(this.API_URL, data);
  }
}