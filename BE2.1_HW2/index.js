const {initializeDatabase} = require("../db/db.connect");
const fs = require("fs");
const Hotels = require("./models/hotels.models");
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

// const newHotel = {
//  name: "Lake View",
//   category: "Mid-Range",
//   location: "124 Main Street, Anytown",
//   rating: 3.2,
//   reviews: [],
//   website: "https://lake-view-example.com",
//   phoneNumber: "+1234555890",
//   checkInTime: "2:00 PM",
//   checkOutTime: "12:00 PM",
//   amenities: ["Laundry", "Boating"],
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isParkingAvailable: false,
//   isWifiAvailable: true,
//   isPoolAvailable: false,
//   isSpaAvailable: false,
//   isRestaurantAvailable: false,
//   photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
// };


async function createHotel(newHotel){

    try{
        const Hotel = new Hotels(newHotel);
        const saveHotel = await Hotel.save();
        console.log(saveHotel);
        return saveHotel;

    } catch(error){
        console.log("Error",error);
    }
}
//  createHotel(newHotel);

app.post("/hotels",async(req,res)=>{
    try{
        const newHotel = await createHotel(req.body);
        res.status(200).json({message:"Successfully saved new hotels!",Hotels:newHotel});

    }catch(error){
        res.status(500).json({error:"Failed to create new hotel"});
    }
})


async function getAllData() {
   try{
    const Hotel = await Hotels.find();
    console.log(Hotel);
    return Hotel

   }catch(error){
    throw error;
   }

}

// getAllData()

app.get("/hotels",async(req,res)=>{
    try{
        const hotelsResult = await getAllData();

        if(hotelsResult.length !== 0){
            res.status(200).json(hotelsResult);
        }else{
            res.status(404).json({error:"Hotels not found"})
        }

    }catch(error){
        res.status(500).json({error:"failed to fetch hotels"});
    }
})


// 3. Create a function to read all hotels from the database. Console all the hotels. Use proper function and variable names.

async function getAllHotels(hotelName) {
    try{
        const getData = Hotels.find({name:hotelName});
        console.log(getData);
        return getData;

    }catch(error){
        throw error;
    }

}

// getAllHotels("Lake View");

app.get("/hotels/:hotelName",async(req,res)=>{
    try{
        const hotels = await getAllHotels(req.params.hotelName);
        console.log(hotels);

        if(hotels){
            res.status(200).json(hotels);
        }else{
            res.status(404).json({error:"Hotels not found!"})
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch data!"});
    }
})


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
        return newData;

    }catch(error){
        throw error;
    }
}

// readAllHotelsByCategory("Mid-Range")

app.get("/hotels/category/:hotelCategory",async(req,res)=>{
    try{
        const hotelNewData = await readAllHotelsByCategory(req.params.hotelCategory);

        if(hotelNewData){
            res.status(200).json(hotelNewData);
        }
        else{
            res.status(404).json({error:"hotels not found!"})
        }

    }catch(error){
        res.status(500).json({message:"Hotels not found!"});
    }
})


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
        return newData;

    }catch(error){
        throw error
    }
}

// getHotelsByRating ("4.0")

app.get("/hotels/rating/:hotelRating",async(req,res)=>{
    try{
        const newData = await getHotelsByRating(req.params.hotelRating);
        console.log(newData);
        if(newData){
            res.status(200).json(newData);
        }else{
            res.status(500).json({messsage:"No hotels found!"})
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch data!"});
    }
})



// 10. Create a function to read a hotel by phone number ("+1299655890"). Console the hotel data.


async function getHotelsByPhone(phoneNumber){
    try{
        const newData = await Hotels.find({phoneNumber: phoneNumber});
        console.log(newData);
        return newData;

    }catch(error){
        throw error
    }
}

// getHotelsByPhone("+1299655890")

app.get("/hotels/directory/:phoneNumber",async(req,res)=>{
    try{
        const hotelsData = await getHotelsByPhone(req.params.phoneNumber);

        if(hotelsData){
            res.status(200).json(hotelsData);
        }else{
            res.status(500).json({error:"Hotels not found!"});
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch hotels"});
    }
})


// 1. Create a function that accepts a hotel ID and an object with updated data, and updates the hotel data with the provided ID. Take the _id of the hotel from your database which has the name Lake View and update its checkOutTime to 11 AM. Console the updated hotel.

async function updateHotelInfo(hotelId, dataToUpdate){
    try{
        const updateData = await Hotels.findByIdAndUpdate(hotelId, dataToUpdate, {new:true});
        console.log(updateData);

    }catch(error){
        throw error;
    }
}

// updateHotelInfo("68a586e8122cea0efb58c3ed", {checkOutTime:"11 AM"})


// 2. Create a function that accepts a hotel name and an object with updated data, and updates the hotel data. Take the hotel which has the name "Sunset Resort" and update its rating to 4.2. Console the updated hotel.

async function updateHotels(name, dataToUpdate){
    try{
        const updateData = await Hotels.findOneAndUpdate({name:name}, dataToUpdate, {new: true});
        console.log(updateData);

    }catch(error){
        throw error;
    }

}
// updateHotels("Sunset Resort", {rating:4.2});


//  Create a function that accepts a hotel's phone number and an object with updated data, and updates the hotel data. Take the hotel which has the phone number "+1299655890" and update its phone number  to "+1997687392". Console the updated hotel details.

async function updateHotelInfos(phoneNumber, dataToUpdate){
    try{
        const updateData = await Hotels.findOneAndUpdate({phoneNumber:phoneNumber}, dataToUpdate, {new:true});
        console.log(updateData);

    }catch(error){
        throw error;
    }
}

// updateHotelInfos("+1299655890", {phoneNumber:+1997687392})

async function deleteHotelById(hotelId) {
    try{
        const deleteHotel = await Hotels.findByIdAndDelete(hotelId)
        console.log(deleteHotel)

    }catch(error){
        console.log("Errors",error);
    }
}
// deleteHotelById("68a586e8122cea0efb58c3ed");


async function deleteHotelByPhoneNumber(phoneNumber) {
    try{
        const deleteData = await Hotels.findOneAndDelete({phoneNumber: phoneNumber});
        console.log("Deleting data",deleteData);

    }catch(error){
        console.log("Error",error);
    }
}

deleteHotelByPhoneNumber("1997687392");


// delte hotel by id

async function deleteHotelById(hotelId) {
    try{
        const deleteData = await Hotels.findByIdAndDelete(hotelId);
        return deleteData

    }catch(error){
        console.log("Error",error);
    }

}


app.delete("/hotels/:hotelId",async(req,res)=>{
    try{
        const newData = await await deleteHotelById(req.params.hotelId);
        res.status(200).json({message:"Hotel deleted successfully!"});

    }catch(error){
        res.status(500).json({error:"Failed to fetch hotels"});
    }
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})