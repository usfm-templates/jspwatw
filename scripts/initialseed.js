const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cryptocommerce"
);

const productSeed = [
  {
    title: "Sheesh Button - Purple",
    price: "19.99",
    tag: "Novelty Buttons",
    // image: "../../../assets/the-sheesh-button.jpg", //,
image: "https://i.ebayimg.com/images/g/fGsAAOSw0E1hSN3o/s-l1600.jpg",
    id: 1,
    sku: "SPSBP1",
    date: new Date(Date.now())
  },
  {
    title: "1 Pack Fresh Top Loader",
    price: "0.99",
    tag: "Trading Card Accessories",
    // image: "../../../assets/the-sheesh-button.jpg", //,
image: "https://i.ebayimg.com/images/g/CGEAAOSw4ntgnKwS/s-l1600.png",
    id: 2,
    sku: "PFTCTL1",
    date: new Date(Date.now())
  },
  {
    title: "Sheesh Button - Orange",
    price: "19.99",
    tag: "Novelty Buttons",
    // image: "../../../assets/the-sheesh-button.jpg", //,
image: "https://i.ebayimg.com/images/g/fGsAAOSw0E1hSN3o/s-l1600.jpg",
    id: 3,
    sku: "SPSBB1",
    date: new Date(Date.now())
  },
];

db.Product.deleteMany({})
  .then(() => db.Product.insertMany(productSeed))
  .then((data) => {
    console.log(data, "success");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
