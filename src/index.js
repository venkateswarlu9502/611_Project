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