const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const data = {
    title: "Express App",
    message: "Welcome to my Express App!",
    gifUrl: "/images/your_image_file.jpg", // Replace with the path to your image file
  };
  res.render("index", data);
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

// Route for the contact page
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
