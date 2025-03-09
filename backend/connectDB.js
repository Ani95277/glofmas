const mongoose = require('mongoose');

function connectToDB(url){
    return mongoose.connect(url);
}
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.error("MongoDB Connection Error:", err));

module.exports = {connectToDB}