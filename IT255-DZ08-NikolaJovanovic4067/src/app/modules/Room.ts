export class Room {
    roomNumber: string;
    name: string;
    availablePpl: number;
    nights: number;
    price: number;

    constructor(roomNumber: string, name: string, availablePpl: number, nights: number, price: number) {
        this.roomNumber = roomNumber;
        this.name = name;
        this.availablePpl = availablePpl;
        this.nights = nights;
        this.price = price;
    }

}