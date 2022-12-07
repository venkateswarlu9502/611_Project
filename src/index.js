function processDate() {
  const dateEnt = document.getElementById('date').valueAsDate
  console.log(dateEnt)

  const tomorrow = findTomorrow(dateEnt)
  const yesterday = findYesterday(dateEnt)
  const day = findWeekday(dateEnt)
  const Zodiac = findZodiac(dateEnt)
  const ShoppingDays = finShopDays(dateEnt)

  document.getElementById('nextDate').valueAsDate = tomorrow
  document.getElementById('prevDate').valueAsDate = yesterday
  document.getElementById('Day').value = day
  document.getElementById('Zodiac').value = Zodiac
  document.getElementById('shopDays').value = ShoppingDays
  return false
}

const findTomorrow = (dateEnt) => {
  // Tomorrow Date
  const tomorrow = new Date(dateEnt)
  tomorrow.setDate(tomorrow.getDate() + 1)
  console.log(tomorrow)
  return tomorrow
}
const findYesterday = (dateEnt) => {
  // Yesterday Date
  const yesterday = new Date(dateEnt)
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}
const findWeekday = (dateEnt) => {
  // Day of Date Entered
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const day_no = new Date(dateEnt)
  let day = weekday[day_no.getDay()]
  return day
}
const findZodiac = (dateEnt) => {
  // Zodiac Sign
  const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22]
  const signs = [
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricon',
  ]
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const day_no = new Date(dateEnt)
  let day = weekday[day_no.getDay()]
  let month = day_no.getMonth()
  if (month == 0 && day <= 20) {
    month = 11
  } else if (day < days[month]) {
    month--
  }
  return signs[month]
}
const finShopDays = (dateEnt) => {
  // Shopping Days
  const date = new Date(dateEnt)
  let year = date.getFullYear()
  let christmas = new Date(year, 11, 25)
  let weekendDays = 0
  while (date <= christmas) {
    var days = date.getDay()
    if (days != 0) {
      weekendDays++
    }
    date.setDate(date.getDate() + 1)
  }
  const shopDays = weekendDays + ' ' + 'Days'
  return shopDays
}
module.exports = {
  finShopDays,
  findTomorrow,
  findWeekday,
  findYesterday,
  findZodiac,
}
// let api;
// const wrapper = document.querySelector(".wrapper"),
// inputPart = wrapper.querySelector(".input-part"),
// infoTxt = inputPart.querySelector(".info-txt"),
// inputField =inputPart.querySelector("input"),
// locationBtn = inputPart.querySelector("button");
// inputField.addEventListener("keyup", e =>{
//     if(e.key =="Enter" && inputField.value!=""){
//         requestApi(inputField.value);
//     }
// });

// locationBtn.addEventListener("click", ()=>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }else{
//         alert("No browser support")
//     }
// });
// function onSuccess(position){
//     const {latitude, longitude}= position.coords;
//     api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
//     fetchData();
// }

// function onError(error){
//     infoTxt.innerHTML =error.message;
//     infoTxt.classList.add("error");
// }

// let apikey='d469ecd03067ed347ef4ea5e65cc8ca8';
// function requestApi(city){
//     api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
//     fetchData();
// }

// function fetchData(){
//     infoTxt.innerText ="Getting weather details....";
//     infoTxt.classList.add("pending");
//     fetch(api).then(response => response.json()).then(result => weatherDetails(result));

// }
// function weatherDetails(info){
//     infoTxt.classList.replace("pending","error");
//     if(info.cod =='404'){
//         infoTxt.innerText =`${inputField.value} isn't a valid city name`;
//     }else{
//         const city = info.name;
//         const country = info.sys.country;
//         const {description, id} = info.weather[0];
//         const { feels_like, humidity,temp}= info.main;
//         const {speed} =info.wind;

//         wrapper.querySelector(".temp .numb").innerText = temp;
//         wrapper.querySelector(".weather").innerText = description;
//         wrapper.querySelector(".location").innerText = `${city},${country}`;
//         wrapper.querySelector(".wind").innerText = speed;
//         wrapper.querySelector(".humidity span").innerText = humidity;

//         infoTxt.classList.remove("pending","error");
//         wrapper.classList.add("active");
//         console.log(info);
//     }
// }
