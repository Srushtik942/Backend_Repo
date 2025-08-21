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

 restaurantByCuisine("Italian");


