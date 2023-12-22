
let search = document.querySelector(".search");

search.addEventListener("click", () => {
 
  let input = document.getElementById("city").value;
  console.log(input)
  if (input) {
    getdata(input);
  } else {
    alert("Enter a valid city");
  }
});

function getdata(input) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d1b8c0b0e018dbcaad7f5526910b076f`)
    .then((response)=>
    {
    return response.json()
    }).then((data)=>{
        
        setweather(data)
    
    }).catch((e)=>{
        alert(`something went wrong ${e}`)
    })
}

function setweather(data){
let { main:{temp,humidity} ,weather:[{main}],wind:{speed}}=data

let image = document.querySelector('#image')
switch(main)
{

  case 'rain':
    image.src= 'rain.png'
    break;
  case 'snow':
    image.src= 'snow.png'
    break;
  case 'Clouds':
    image.src= 'weather.png'
    break;
  case 'mist':
    image.src= 'weather-app.png'
    break;
  case 'Haze':
    image.src= 'weathe-app.png'
    break;
  default:
    image.src='weather-app.png'

    
  }

console.log(document.querySelector(".temp").innerHTML)
let temp3=` ${Math.floor(temp-273)} °C`
document.querySelector(".temp").innerHTML=temp3
document.querySelector(".demotem").innerHTML= main
document.querySelector(".demohum").innerHTML= `${humidity}%`
document.querySelector(".windspeed").innerHTML= `${speed} km/h`

let display = document.querySelectorAll(".display")
let firstcontainer = document.querySelector(".firstcontainer")
firstcontainer.classList.add('firstheight')
display.forEach(element => {
  element.classList.add('show');
});


}


