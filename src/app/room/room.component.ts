import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CarouselModule, CommonModule, FormsModule],
  templateUrl: './room-component.html',
  styleUrls: ['./room-component.css']
})
export class RoomComponent implements OnInit {
  checkIn!: string;
  checkOut!: string;
  rooms: number = 1;
  adults: number = 2;

  isAnimated = true;
  interval = 0;

  ngOnInit() { }

  increment(field: string) {
    if (field === 'rooms') {
      this.rooms++;
    } else if (field === 'adults') {
      this.adults++;
    }
    this.updateGuests();
  }

  decrement(field: string) {
    if (field === 'rooms' && this.rooms > 1) {
      this.rooms--;
    } else if (field === 'adults' && this.adults > 1) {
      this.adults--;
    }
    this.updateGuests();
  }

  updateGuests() {
    const guestsText = `${this.rooms} quarto, ${this.adults} adultos`;
    const guestsElement = document.querySelector('#guests span');
    if (guestsElement) {
      guestsElement.textContent = guestsText;
    }
  }

  onSubmit() {
    const bookingDetails = {
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      rooms: this.rooms,
      adults: this.adults
    };
    console.log('Booking Details:', bookingDetails);
  }
}
