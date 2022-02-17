/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//The URL to retrieve weather info from API
const baseURL = "https://home.openweathermap.org/api_keys";

//My API key for openweathermap API
const apiKey=",&appidf79130fe99067b31d3323a6d23db1289=metric";

//Generate data
const generateData = () => {
    const zip = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
}
//get weather data return
const getWeatherData = (zip).then((data) => {
    if(data){
        const {
            main: {temp},
            name: city,
            weather: [{description}],
        } = data;
        const info= {
            newDate,
            city,
            temp: Math.round(temp),
            discription,
            feelings,
        };
        postData(server + "/add", info);
        upadtingUi();
        document.getElementById("entry").style.opacity = 1;
    }
});

//Function called by evenr listener
document.getElementById("generate").addEventListener("click" , generateData);

//Function to get API data
const getWeatherData = async(zip) =>{
    try{
        const res= await fetch(baseURL + zip + apiKey);
        const data= await res.json();

        if(data.code != 200){
            error.innerHtml = data.message;
            setTimeout(_=> error.innerHtml = '' , 2000)
        }
        return data;
    }
    catch(error){
        console.log(error);
    }
};

//Function to post data
const postData= async  (url = "", info = {})=> {
    const res = await fetch(url, {
        method = post,
        headers: {
            "conent-type": "application/json",

        },
        body: JSON.stringify(info),
    });
    try{
        const newData= await res.json();
        console.log("you saved " , newData);
        return newData;
    }
    catch(error){
        console.log(error);
    }

};

//Get project data
const upadtingUi= async()=>{
    const res = await fetch (server + "/all");
    try{
        const savedData= await res.json();
        document.addEventListener("date").innerHtml = savedData.newDate;
        document.addEventListener("city").innerHtml = savedData.city;
        document.addEventListener("temp").innerHtml = savedData.temp;
        document.addEventListener("description").innerHtml = savedData.description;
        document.addEventListener("content").innerHtml = savedData.feelings;
    }
    catch(error){
        console.log("error");
    }
}
