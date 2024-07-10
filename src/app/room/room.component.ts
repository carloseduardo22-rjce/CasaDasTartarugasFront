import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './room-component.html',
  styleUrls: ['./room-component.css']
})
export class RoomComponent implements OnInit {

  ngOnInit() {

  }

}