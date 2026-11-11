const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

const tickets = [{
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
const bookings = [];

app.get("/api/tickets", (req, res) => {
    res.json(tickets);
});

app.post("/api/bookings", (req, res) => {
    const newBooking = { id: Date.now(), ...req.body };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        const token = jwt.sign({ email }, "deep-dive-secret-key", {
            expiresIn: "1h",
        });
        res.json({ token });
    } else {
        res.status(400).json({ message: "Please enter your email and password" });
    }
});

const PORT = 5001;

app.post("/api/call", async(req, res) => {
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