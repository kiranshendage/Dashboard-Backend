const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/e-com")


mongoose.connect("mongodb+srv://kiran:Kiran2003@cluster0.38yys.mongodb.net/e-com?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Database Connected"))
  .catch(err => console.log("Database Connection Error:", err));
