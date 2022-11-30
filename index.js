function processDate(){     
    const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const Days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo",    "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
 
    const dateEnt = document.getElementById("date").valueAsDate;
    
    // Day of Date Entered
    let day = weekday[dateEnt.getDay()];
    console.log(dateEnt.getDay());
    document.getElementById("Day").value = day;

    // Yesterday Date
    const tomorrow = new Date(dateEnt);
    tomorrow.setDate(tomorrow.getDate() - 1);
    document.getElementById("nextDate").valueAsDate = tomorrow;

    const date = new Date(dateEnt);
    let year = dateEnt.getFullYear();
    let month = dateEnt.getMonth();
    let date_mon = dateEnt.getDate();
    let christmas = new Date(year,11,25);
    let weekendDays = 0;
    // Shopping Days
    while (date <= christmas) {
        var days = date.getDay();
        if (days != 0) {
            weekendDays++;
            }
            date.setDate(date.getDate() + 1);
        };

    document.getElementById("shopDays").value = weekendDays+" "+"Days";
    // Zodiac Sign
    if(month == 0 && day <= 20){
        month = 11;
    }else if(day < days[month]){
        month--;
    };
    document.getElementById("Zodiac").value = signs[month];  
    return false;              
}