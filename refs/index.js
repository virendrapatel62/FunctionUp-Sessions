const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/28_oct")
  .then(() => {
    console.log("Connection created..");
  })
  .catch((error) => {
    console.log(error.message);
  });

const citySchema = new mongoose.Schema({
  name: String,
  state: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: {
    type: mongoose.Types.ObjectId,
    // ref: "City",
  },
});

const User = mongoose.model("User", userSchema);
const City = mongoose.model("City", citySchema);

async function saveCity() {
  let city = [
    {
      name: "jabalpur",
    },
    {
      name: "BHopal",
    },
    {
      name: "Indore",
    },
  ];

  city = await City.create(city);
  console.log(city);
}

// saveCity();

async function saveUser(name, age, cityId) {
  const user = await User.create({
    name: name,
    age: age,
    city: cityId,
  });

  console.log(user);
}

// saveUser("Harsh", 24, "635bdfa490acbf766e123d39");

async function getAllUser() {
  //   const users = await User.find().populate("city");
  //   const users = await User.find().select("-name -age").populate("city");
  const users = await User.find().select().populate({
    path: "city",
    model: City,
    select: "name -_id",
  });
  console.log(users[0]);
}

// getAllUser();

User.findByIdAndUpdate(
  "635be053bcd0b8781f195fa9",
  {
    $inc: {
      age: -5,
    },
  },
  { new: true }
).then(console.log);
