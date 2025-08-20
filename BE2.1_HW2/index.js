const {initializeDatabase} = require("../db/db.connect");
const fs = require("fs");
const Hotels = require("./models/hotels.models");

initializeDatabase();

const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
};


async function createHotel(newHotel){

    try{
        const Hotel = new Hotels(newHotel);
        const saveHotel = await Hotel.save();
        console.log(saveHotel);

    } catch(error){
        console.log("Error",error);
    }
}
 createHotel(newHotel);
 