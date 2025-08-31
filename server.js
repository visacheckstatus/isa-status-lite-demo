const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// --- Dummy demo data ---
const users = [
  { passport: "A1234567", reference: "REF001", status: "Visa Approved" },
  { passport: "B7654321", reference: "REF002", status: "Application Under Review" }
];

// --- Routes ---
app.get("/", (req, res) => {
  res.send("✅ Visa Status Lite Demo is running. Go to /status");
});

// Status form
app.get("/status", (req, res) => {
  res.render("status-form", { error: null, result: null });
});

// Status check POST
app.post("/status", (req, res) => {
  const { passport, reference } = req.body;
  const user = users.find(
    u => u.passport === passport && u.reference === reference
  );

  if (user) {
    res.render("status-form", { error: null, result: user });
  } else {
    res.render("status-form", { error: "❌ No record found!", result: null });
  }
});

// --- Admin login page ---
app.get("/admin", (req, res) => {
  res.render("admin-login", { error: null });
});

app.post("/admin", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "12345") {
    res.send("✅ Welcome Admin! (Demo panel will come here)");
  } else {
    res.render("admin-login", { error: "Invalid credentials!" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
