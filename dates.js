/*eslint-env browser*/

//STEP 1
/*function myFunction() {
    var today = new Date();
    var month = today.getMonth();
    window.console.log(daysInMonth(month + 1, today.getFullYear()))
}

function daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}

myFunction();*/
//STEP 2
/*var thisMonth = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
window.console.log(months[thisMonth.getMonth()]);*/
//STEP 3
/*var weekDay = new Date();
weekDay.getDate();
if (weekDay === 0 || weekDay === 6) {
window.console.log("It's the weekend!");
} else {
window.console.log("Sorry it's not the weekend yet");
}*/
//STEP 4
/*var yesterday = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
window.console.log(days[yesterday.getDay() - 1]);*/
//STEP 5
/*var today = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
window.console.log(days[today.getDay()].charAt(0));*/