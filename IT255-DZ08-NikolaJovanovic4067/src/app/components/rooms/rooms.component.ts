import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { Room } from '../../modules/Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() room: Room;
  public pricesSum: any;

  @Output() obrisiEvent: EventEmitter<Room>;
  @Output() updateEvent: EventEmitter<Room>;

  constructor(private room_service: RoomServiceService) {
    this.room = new Room("123", "Naziv", 4, 9, 5)
    this.obrisiEvent = new EventEmitter<Room>();
    this.updateEvent = new EventEmitter<Room>();
  }

  public price() {
    this.pricesSum = this.room.nights * this.room.price;
    return this.room_service.getPrice(this.pricesSum);
  };

  public deleteHotel() {
    this.obrisiEvent.emit(this.room);
  }
  public editHotelRoom() {
    this.updateEvent.emit(this.room);
    console.log("Ovo je cijena", this.price())
  }
  ngOnInit() {
  }
}