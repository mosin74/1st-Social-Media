const { connect } = require('mongoose')
const app = require('./app')
const { connectDatabase } = require('./config/database')
const cloudinary = require("cloudinary");
// const cors=require("cors")
// const cors=require("cors");



connectDatabase();
// app.use(cors());
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})