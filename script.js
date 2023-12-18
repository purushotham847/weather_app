

let buttondata = document.querySelector(".button");

buttondata.addEventListener("click", () => {
  let input = document.getElementById("city").value;
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
let {name, main:{temp,humidity} ,weather:[{main}]}=data


document.querySelector(".title").innerHTML=`Weather in ${name} 👉`
document.querySelector(".temp").innerHTML=`${Math.floor(temp-273)}`
document.querySelector(".demotem").innerHTML= main
document.querySelector(".demohum").innerHTML= `humidity : ${humidity}`


}
