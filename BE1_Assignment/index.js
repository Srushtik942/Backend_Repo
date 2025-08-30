const {initializeDatabase} = require("../db/db.connect");
const Cars = require("./models/cars.models");

initializeDatabase();

  const carData = {
   brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};

async function createNewCarData(carData){
    try{
        // creating a new mongoose document 
        const newCar = new Cars(carData);
        const car = await newCar.save();
        console.log("New Car",car);

    }catch(error){
        throw error;
    }
}

createNewCarData(carData)

// getting all cars data

async function getAllCars(){
    try{
        const data = await Cars.find();
        console.log("All Cars Data",data);

    }catch(error){
        throw error;
    }
}
getAllCars()

// Create a function to read cars by brand ("Ford").

async function getCarByName(brandName){
    try{
      const data = await Cars.findOne({brand:brandName});
      console.log(data);
    }catch(error){
        throw error;
    }
}
getCarByName("Ford")

// Create a function to read cars by color ("Black"). Console

async function getCarByColor(colorName){
    try{
        const data = await Cars.findOne({color: colorName});
        console.log(data);

    }catch(error){
        throw error;
    }
}

getCarByColor("Black")


// Create a function to update the price of a car with model "Corolla"

async function updatPrice(name, dataToUpdate){
    try{
   const data = await Cars.findOneAndUpdate({model: name},dataToUpdate,{new:true});
   console.log("Data",data);

    }catch(error){
        throw error;
    }
}

updatPrice("Corolla",{price: 2300000});


// reate a function to update the condition of a car with model "Model S"

async function updateCondition(model,dataToUpdate){
    try{
        const updateData = await Cars.findOneAndUpdate({model: model}, dataToUpdate, {new:true});
        console.log(updateData);

    }catch(error){
        throw error;
    }
}
updateCondition("Model S",{condition: "Used"})



// 8. Create a function to delete a car by ID. Take the id of the car brand Tesla from the database and delete that car record. Console the deleted car data.


async function deleteCarById(carId){
    try{
     const deletedData = await Cars.findByIdAndDelete(carId);
     console.log("Car Data deleted successfully!",deletedData);

    }catch(error){
        throw error;
    }
}
deleteCarById("68a49b32b6244841571e3f76")


// 9. Create a function to delete a car by its body style. Delete the car data with body style "Coupe" from the database console the deleted car data.

async function deleteCarByStyle(bodyStyle){
    try{
     const deleteData = await Cars.findOneAndDelete({bodyStyle: bodyStyle});
     console.log(deleteData);
    }catch(error){
        throw error;
    }
}
deleteCarByStyle("Coupe")
