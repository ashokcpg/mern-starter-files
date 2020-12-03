import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
//Using Express Functionalities...
const app = express();

// Body Parser and CORS things...
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Importing the Router...
import empRouter from "./Routes/myRoutes.js";

// Defining the Router path...
app.use("/api", empRouter);

//Defining Database URL for Databse Connection...
const DB_URI =
	process.env.MONGODB_URI ||
	"mongodb+srv://dbUser:dbPassword@cluster0.3h7oh.mongodb.net/CaptureMemories?retryWrites=true&w=majority";
//Defining port for Databse Connection...
const PORT = process.env.PORT || 5000;

// Connecting MongoDB Database using Mongoose...
mongoose
	.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Yaay!!! Server running on port ${PORT}`)
		);
	});
