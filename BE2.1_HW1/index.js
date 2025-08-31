const {initializeDatabase} = require("../db/db.connect");
const fs = require("fs");
const Restaurants = require("./models/restaurant.models");
initializeDatabase();
const express = require("express");
const { error } = require("console");
const app = express();
app.use(express.json());

// const newRestaurant = {
//    name: "Yo China",
//   cuisine: ["Chinese", "Italian"],
//   location: "MG Road, Bangalore",
//   rating: 3.9,
//   reviews: [],
//   website: "https://yo-example.com",
//   phoneNumber: "+1288997392",
//   openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isDeliveryAvailable: false,
//   menuUrl: "https://yo-example.com/menu",
//   photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
// };

async function createRestaurant(newRestaurant) {
    try{
        const Restaurant = new Restaurants(newRestaurant);
        const saveRes = await Restaurant.save();
        console.log(saveRes);
        return saveRes;
    }catch(error){
        throw error
    }
}

// createRestaurant(newRestaurant) ;

app.post("/restaurants",async(req,res)=>{
    try{
        const newRestaurantData = await createRestaurant(req.body);
        console.log("newRestaurantData",newRestaurantData);
        res.status(200).json({message:"Restaurant added successfully!",Restaurant: newRestaurantData});

    }catch(error){
        res.status(500).json({error:"Failed to add restaurant!"});
    }
})


async function getAllRestaurants (){
    try{
        const Restaurant = await Restaurants.find();
        console.log("All Restaurants",Restaurant);
        return Restaurant

    }catch(error){
        throw error;
    }
}

// getAllRestaurants();

app.get("/restaurant",async(req,res)=>{
    try{
        const restaurantResult = await getAllRestaurants();
        console.log("restaurantResult",restaurantResult);
        if(restaurantResult.length !== 0){
            res.status(200).json(restaurantResult);
        }else{
            res.status(404).json({error:"Retsuarants not found!"});
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch restaurants!"});
    }
})

async function getRestaurantByName(restaurantName){
    try{
        const RestaurantName = await Restaurants.findOne({name: restaurantName});
        console.log("RestaurantName",RestaurantName);
        return RestaurantName;

    }catch(error){
        throw error;
    }
}

app.get("/restaurants/:restaurantName",async(req,res)=>{
    try{
        const restaurantRes = await getRestaurantByName(req.params.restaurantName);
        console.log(restaurantRes);

        if(restaurantRes){
            res.status(200).json(restaurantRes);
        }
        else{
            res.status(404).json({error:"Restaurant not found"});
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch restauarnt!"});
    }
})



// getRestaurantByName("Somi");


// 5. Create a function to read all restaurants which offers reservations. Console the restaurant details.


async function restaurantsOfferReservation(reservationsNeeded){
    try{
        const RestaurantReservation = await Restaurants.find({reservationsNeeded: true});
        console.log(RestaurantReservation);

    }catch(error){
        throw error;
    }
}

// restaurantsOfferReservation(true);

// 6. Create a function to read all restaurants which offers delivery. Console the restaurant details.


async function restaurantOfferDelivary(isDeliveryAvailable){
    try{
        const newRestaurant = await Restaurants.find({isDeliveryAvailable: true});
        console.log(newRestaurant);

    }catch(error){
        throw error;
    }
}

// restaurantOfferDelivary(true);

// 7. Create a function to read a restaurant by phone number (+1288997392). Console the restaurant details.

async function readRestauarantPhone(number){
    try{
        const newRestaurant = await Restaurants.find({phoneNumber: number});
        console.log(newRestaurant);
        return newRestaurant;

    }catch(error){
        throw error;
    }
}
// readRestauarantPhone("+1288997392");

app.get("/restaurants/directory/:phoneNumber",async(req,res)=>{
    try{
        const restauarantByPhone = await readRestauarantPhone(req.params.phoneNumber);
        console.log(restauarantByPhone);

        if(restauarantByPhone){
            res.status(200).json(restauarantByPhone);
        }else{
            res.status(404).json({error:"Restaurant not found"})
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch restaurant"});
    }
})


// . Create a function to read all restaurants by cuisine ("Italian"). Console all the restaurants with Italian cuisine.


async function restaurantByCuisine(dishname){
    try{
        const newRestaurant = await Restaurants.find({cuisine:dishname })
        console.log(newRestaurant);
        return newRestaurant
    }catch(error){
        throw error;
    }
}

//  restaurantByCuisine("Italian");

app.get("/restaurants/cuisine/:cuisineName",async(req,res)=>{
    try{
        const restaurantResult = await restaurantByCuisine(req.params.cuisineName);

        if(restaurantResult){
            res.status(200).json(restaurantResult);
        }else{
            res.status(404).json({error:"Restauarant not found by cuisine"})
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch restaurant"});
    }
})

// fetch res by location

async function getResByLocation(location){
    try{
        const newRestaurant = await Restaurants.find({location:location })
        console.log(newRestaurant);
        return newRestaurant
    }catch(error){
        throw error;
    }

}

app.get("/restaurants/location/:restaurantLocation",async(req,res)=>{
    try{
        const restaurantResult = await getResByLocation(req.params.restaurantLocation);

        if(restaurantResult){
            res.status(200).json(restaurantResult);
        }else{
            res.status(404).json({error:"Restauant not found by location"})
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch restarant!"});
    }
})



// 1. Create a function that accepts a restaurant ID and an object with updated data, and updates the restaurant with the provided ID. Take the _id of the restaurant which has the name Yo China and update its rating from 3.9 to 4.1. Console the updated restaurant.


async function updateesstaurant(resId, rating){
    try{
        const updateRating = await Restaurants.findByIdAndUpdate(resId, rating, {new: true});
        console.log(updateRating);
        return updateRating;

    }catch(error){
        throw error;
    }
}

// updateesstaurant("68a6b1944be231b590be88e9", {rating:4.1})

app.post("/restaurant/:resId",async(req,res)=>{
    try{
        const restaurantData = await updateesstaurant(req.params.resId,req.body);
        if(restaurantData){
            res.status(200).json({message:"Updated movie!",restaurant:restaurantData})
        }else{
            res.status(500).json({error:"No restauramt found!"});
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch restaurant"});
    }
})




//2. Create a function that accepts a restaurant name and an object with updated data, and updates the restaurant. Take the restaurant which has the name "Somi" and update its name from "Somi" to "Som Sarovar". Console the updated restaurant.


async function updateRes(name, dataToUpdate) {
    try{
      const updateName = await Restaurants.findOneAndUpdate({name:name}, dataToUpdate, {new: true});
      console.log(updateName);

    }catch(error){
        throw error;
    }

}

updateRes("Somi",  {name: "Som Sarovar"});


//3. Create a function that accepts a restaurant's phone number and an object with updated data, and updates the restaurant. Take the restaurant which has the phone number "+1288997392" and update isDeliveryAvailable option to true. Console the updated restaurant.


async function restuarantUpdate(phoneNumber, dataToUpdate){
    try{
        const updateRestaurantInfo = await Restaurants.findOneAndUpdate({phoneNumber: phoneNumber}, dataToUpdate, {new: true});
        console.log(updateRestaurantInfo);

    }catch(error){
        throw error;
    }
}

// restuarantUpdate("+1288997392", {isDeliveryAvailable:true })


//  Create a function deleteRestaurantById that accepts a restaurant ID and deletes the restaurant data from the db. Take any restaurant id from your database and delete the records of that restaurant.

async function deleteRestaurantById (resId){

    try{
      const deleteRestaurant = await Restaurants.findByIdAndDelete(resId);
      console.log("Succesfully deleted the restaurant!", deleteRestaurant);

    }catch(error){
        console.log("Error",error);
    }
}

// deleteRestaurantById ("68a56604f06cc7741b5b7a2c")

async function deleteRestaurantByName(resName) {
    try{
   const deleteRestaurant = await Restaurants.findOneAndDelete({name:resName});
   console.log("Deleted Restaurant!", deleteRestaurant);

    }catch(error){
        console.log("Error",error);
    }

}
deleteRestaurantByName("Yo China")

// delete rstaurant by id

async function deleteRestaurant(resId) {
    try{
        const deleteRes = await Restaurants.findByIdAndDelete(resId);
        return deleteRes;

    }catch(error){
        console.log(error);
    }

}

app.delete("/restaurants/:restaurantId",async(req,res)=>{
    try{
        const restauarantData = await deleteRestaurant(req.params.restaurantId);
        res.status(200).json({message:"Restaurant deleted successfully!"})

    }catch(error){
        res.status(500).json({error:"Failed to fetch restaurant"});
    }
})


const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})