// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = rquire("express");
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(urlencoded({ extended: false }));
app.use(json());

// Cors for cross origin allowance
const cors = require(cors);
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

//Callback function to complete Get
const getAll = (req , res) => res.status(200).send(projectData);
app.get("/all" , getAll);

//Callback function to complete Get
const postData = (req , res)=> 
{
    projectData = req.body;
    console.log(projectData);
    res.status(200).send(projectData);
}

//Get route
app.post("/all" , projectData);
// Setup Server
const port = 8000;
const server = app.listen(port , listening);
function listening(){
    console.log("server running");
    console.log(`running on localhost ${port}`);
}
