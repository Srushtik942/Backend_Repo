const {initializeDatabase} = require("../db/db.connect");
const fs = require("fs");
const Hotels = require("./models/hotels.models");

initializeDatabase();

const newHotel = {
 name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
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
//  createHotel(newHotel);


async function getAllData() {
   try{
    const Hotel = await Hotels.find();
    console.log(Hotel);

   }catch(error){
    throw error;
   }

}

// getAllData()


// 3. Create a function to read all hotels from the database. Console all the hotels. Use proper function and variable names.

async function getAllHotels(hotelName) {
    try{
        const getData = Hotels.find({name:hotelName});
        console.log(getData);

    }catch(error){
        throw error;
    }

}

// getAllHotels("Lake View");


// . Create a function to read all hotels which offers parking space. Console all the hotel details.


async function getDataOffersParking(isParkingAvailable){
    try{
        const parkingAvailable = await Hotels.find({isParkingAvailable : true});
        console.log(parkingAvailable);

    }catch(error){
        throw error
    }
}
// getDataOffersParking(true)


// 6. Create a function to read all hotels which has restaurant available. Console all the hotels.


// async function RestaurantAvailable(){
//     try{


//     }catch(error){
//         throw error;
//     }
// }


// 7. Create a function to read all hotels by category ("Mid-Range"). Console all the mid range hotels.

async function readAllHotelsByCategory (category){
    try{
        const newData = await Hotels.find({category: category});
        console.log(newData);

    }catch(error){
        throw error;
    }
}

// readAllHotelsByCategory("Mid-Range")


// 8. Create a function to read all hotels by price range ("$$$$ (61+)"). Console all the hotels.



async function hotelsByPrice(price){
    try{
        const newData = await Hotels.find({priceRange: price});
        console.log(newData);
    }catch(error){
        throw error;
    }
}

// hotelsByPrice("$$$$ (61+)")

// 9. Create a function to read all hotels with 4.0 rating. Console the hotels.

async function getHotelsByRating (rating){
    try{
        const newData = await Hotels.find({rating:rating});
        console.log(newData);

    }catch(error){
        throw error
    }
}

// getHotelsByRating ("4.0")

// 10. Create a function to read a hotel by phone number ("+1299655890"). Console the hotel data.


async function getHotelsByPhone(phoneNumber){
    try{
        const newData = await Hotels.find({phoneNumber: phoneNumber});
        console.log(newData);

    }catch(error){
        throw error
    }
}

getHotelsByPhone("+1299655890")
