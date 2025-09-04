import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReservationService } from '../../services/reservation';

@Component({
  selector: 'app-reservas',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './reservas.html',
  styleUrls: ['./reservas.css']
})
export class Reservas {
success: string | null = null;
  error: string | null = null;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.form = this.fb.group({
      rut: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      tableId: [null, Validators.required]
    });
  }

  toastMessage: string | null = null;

  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => this.toastMessage = null, 6000); 
  }
  submit() {
    if (this.form.invalid) {
    this.showToast('Por favor completa todos los campos ❌');
    return;
  }

    const formValue = this.form.value;

    const payload = {
      rut: formValue.rut!,
      firstName: formValue.firstName!,
      lastName: formValue.lastName!,
      phone: formValue.phone!,
      date: new Date(formValue.date!).toISOString(),
      time: formValue.time!,
      tableId: Number(formValue.tableId!)
    };

    this.reservationService.createReservation(payload).subscribe({
      next: () => {
      this.showToast('✅ Reserva creada con éxito');
      this.form.reset();
    },
    error: () => {
      this.showToast('❌ Error al crear la reserva');
    }
    });
  }
}


