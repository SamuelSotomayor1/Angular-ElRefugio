import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservas',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './reservas.html',
  styleUrls: ['./reservas.css']
})
export class Reservas {
  reservationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
  ) {
    this.reservationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      rut: ['', Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('📋 Datos del formulario:', this.reservationForm.value);

    if (this.reservationForm.invalid) {
      console.warn('⚠️ El formulario es inválido, completa todos los campos.');
      alert('Por favor completa todos los campos del formulario.');
      return;
    }

    // 👉 Crear la reserva directamente
    this.reservationService.createReservation(this.reservationForm.value).subscribe({
      next: (res) => {
        console.log('✅ Reserva creada:', res);
        alert('✅ Reserva creada con éxito');
        this.reservationForm.reset();
      },
      error: (err) => {
        console.error('❌ Error al crear reserva', err);
        alert('❌ No se pudo crear la reserva');
      },
    });
  }
}

