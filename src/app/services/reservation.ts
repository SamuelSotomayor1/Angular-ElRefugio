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
  private apiUrl = 'https://backend-elrefugio.onrender.com/api/reservation';

  constructor(private http: HttpClient) {}

  createReservation(data: Reservation): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}