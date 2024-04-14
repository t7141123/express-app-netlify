const express = require("express");
const serverless = require("serverless-http");


const app  = express();

const router = express.Router();

app.set("views", __dirname + "/views");
app.set("view engine","ejs");

app.use('/.netlify/functions/api', router);


router.get("/", (req,res) => {res.render("index.html")});
router.get("/projects", (req,res) => {res.render("projects.html")});
router.get("/art", (req,res) => {res.render("ar.html")});
router.get("/resume", (req,res) => {res.render("resume.html")});

module.exports.handler = serverless(app);