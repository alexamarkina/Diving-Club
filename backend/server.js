require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const SECRET_KEY = "deep-dive-secret-key";
const DB_PATH = path.join(__dirname, "db.json");

const readDB = () => {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(
      DB_PATH,
      JSON.stringify({ users: [], bookings: [] }, null, 2)
    );
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
};

const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

const tickets = [
  {
    id: "1",
    title: "Solo",
    price: 240,
    duration: "2 hours",
    description1: "One-on-one coaching with a pro trainer.",
    description2: "Duration: 2 hours",
    description3: "Access to unique dive locations",
  },
  {
    id: "2",
    title: "Group",
    price: 399,
    duration: "4 hours",
    description1: "Small group dives (8-10 people). Fun team atmosphere.",
    description2: "Duration: 4 hours",
    description3: "Access to unique dive locations",
  },
  {
    id: "3",
    title: "Cruise",
    price: 590,
    duration: "2 days",
    description1: "Large-scale dive expedition. Includes transfer.",
    description2: "Duration: 2 days",
    description3: "Access to unique dive locations",
  },
];

app.get("/api/tickets", (req, res) => {
  res.json(tickets);
});

app.get("/api/bookings", (req, res) => {
  const db = readDB();
  res.json(db.bookings);
});

app.post("/api/bookings", (req, res) => {
  const db = readDB();
  const newBooking = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString(),
  };
  db.bookings.push(newBooking);
  writeDB(db);
  res.status(201).json(newBooking);
});

// Реєстрація нового юзера
app.post("/api/auth/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please enter your email and password" });
  }

  const db = readDB();
  const existingUser = db.users.find((u) => u.email === email);

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User with this email already exists. Please Log in." });
  }

  const newUser = { id: Date.now(), email, password };
  db.users.push(newUser);
  writeDB(db);

  const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(201).json({ token, email: newUser.email });
});

// Вхід існуючого юзера
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please enter your email and password" });
  }

  const db = readDB();
  const user = db.users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password. Try Sign up if you are new.",
    });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ token, email: user.email });
});

const PORT = 5001;

app.post("/api/call", async (req, res) => {
  const { name, phone } = req.body;

  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;
  const message = `🌊 New call request (DEEP DIVE)!\n👤 Name: ${
    name || "Not specified"
  }\n📞 Phone: ${phone}`;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    res.status(200).json({ success: true, message: "Application sent!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Sending error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend successfully launched on http://localhost:${PORT}`);
});
