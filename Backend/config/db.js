const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,

// });
mongoose.connect('mongodb+srv://codeate8:ijO0bdP5wa6Nospr@code8cluster1.tzlgq.mongodb.net/code8-next-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in connecting Database!"));
db.once("open", () => {
  console.log("Database Connected!");
});

mongoose.set('strictQuery', false)

module.exports = db;
