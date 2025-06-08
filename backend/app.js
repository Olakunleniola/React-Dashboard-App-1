import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg",
    lastName: "McDonald",
    firstName: "Elva",
    email: "elva@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    age: 28,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    lastName: "Nelson",
    firstName: "Linnie",
    email: "linnie@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    age: 32,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    lastName: "3456",
    firstName: "Brent",
    email: "brent@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    age: 45,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    lastName: "Watson",
    firstName: "Adeline",
    email: "adeline@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    age: 24,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    lastName: "Harrington",
    firstName: "Juan",
    email: "juan@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    age: 35,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    lastName: "McGee",
    firstName: "Augusta",
    email: "augusta@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    age: 29,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
    lastName: "Thomas",
    firstName: "Angel",
    email: "angel@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    age: 31,
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    lastName: "Smith",
    firstName: "Emma",
    email: "emma@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: false,
    age: 27,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
    lastName: "Johnson",
    firstName: "Michael",
    email: "michael@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    age: 38,
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    lastName: "Williams",
    firstName: "Sophia",
    email: "sophia@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: false,
    age: 26,
  },
];

// GET USERS
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET USER
app.get("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.json(user);
});

// ADD USER
app.post("/api/users", (req, res) => {
  const user = req.body;
  user.id = Math.floor(Math.random() * 1000000);
  users.unshift(user);
  res.json(user);
});

// Update USER
app.put("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.age = req.body.age;
  user.verified = req.body.verified;
  user.createdAt = req.body.createdAt;
  res.json(user);
});

// Delete USER
app.delete("/api/users/:id", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.json("User has been deleted");
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
