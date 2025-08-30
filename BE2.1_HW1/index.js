const {initializeDatabase} = require("../db/db.connect");
const fs = require("fs");
const Restaurants = require("./models/restaurant.models");
initializeDatabase();

const newRestaurant = {
   name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};

async function createRestaurant(newRestaurant) {
    try{
        const Restaurant = new Restaurants(newRestaurant);
        const saveRes = await Restaurant.save();
        console.log(saveRes);
    }catch(error){
        throw error
    }
}

// createRestaurant(newRestaurant) ;


async function getAllRestaurants (){
    try{
        const Restaurant = await Restaurants.find();
        console.log("All Restaurants",Restaurant);

    }catch(error){
        throw error;
    }
}

// getAllRestaurants();


async function getRestaurantByName(restaurantName){
    try{
        const RestaurantName = await Restaurants.findOne({name: restaurantName});
        console.log(RestaurantName);

    }catch(error){
        throw error;
    }
}

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

    }catch(error){
        throw error;
    }
}
// readRestauarantPhone("+1288997392");


// . Create a function to read all restaurants by cuisine ("Italian"). Console all the restaurants with Italian cuisine.


async function restaurantByCuisine(dishname){
    try{
        const newRestaurant = await Restaurants.find({cuisine:dishname })
        console.log(newRestaurant);
    }catch(error){
        throw error;
    }
}

//  restaurantByCuisine("Italian");



// 1. Create a function that accepts a restaurant ID and an object with updated data, and updates the restaurant with the provided ID. Take the _id of the restaurant which has the name Yo China and update its rating from 3.9 to 4.1. Console the updated restaurant.


async function updateesstaurant(resId, rating){
    try{
        const updateRating = await Restaurants.findByIdAndUpdate(resId, rating, {new: true});
        console.log(updateRating);

    }catch(error){
        throw error;
    }
}

// updateesstaurant("68a6b1944be231b590be88e9", {rating:4.1})


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