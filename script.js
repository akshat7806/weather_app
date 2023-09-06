const apikey = "143c87f30a29b73909e759e62656a173";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

 async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`)
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
      var data = await response.json();
    bind(data);    
    }
  
 }
function bind(data){
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    weatherIcon.src = `${data.weather[0].main}.png`;
   
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});