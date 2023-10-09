const mongoose = require("mongoose");

const connect = async() => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to Database...");
    } catch (error) {
        console.log(error);
        throw new Error("Can't connect to Databse.");
    }
}

module.exports = {
    connect,  // export the function so we can use it in other files like routes or controllers etc...
}