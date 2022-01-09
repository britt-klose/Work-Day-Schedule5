//open with current date
var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");
console.log(currentDate)
console.log(currentHour)
var hour = document.querySelectorAll(".hour")
var state = document.querySelectorAll(".description")
console.log(state)
var saveButtons = document.querySelectorAll(".saveBtn")
document.getElementById("currentDay").textContent = currentDate



//Ifs for past present future
for (var i = 0; i < state.length; i++) {
    if (hour[i].textContent.substring(0, 2) < currentHour) {
        state[i].setAttribute(
            "style", "background-color:gray"
        )
    } else if (hour[i].textContent.substring(0, 2) > currentHour) {
        state[i].setAttribute(
            "style", "background-color: blue"
        )
    } else {
        state[i].setAttribute(
            "style", "background-color: green"
        )
    }
}

//save buttons
var buttons = document.querySelectorAll(".saveBtn")
console.log(buttons)
for (var i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener("click", function (event) { 
      var test= document.getElementById(this.id.substring(4)).value
      localStorage.setItem(this.id.substring(4), test)
    }) 
}
function renderTasks(){
var taskArray=["9", "10", "11", "12", "13", "14", "15", "16", "17"];
for (var i=0; i<taskArray.length; i++){
    var myTodos =localStorage.getItem(taskArray[i]);
    if (myTodos !== null) {
    document.getElementById(taskArray[i]).value = myTodos;
    } else {
      continue;
    }
  }

}
renderTasks()


//for loop buttons [i].addeventlistener (cuz cant do evnt lstnr to array)
//adding idiv evnt lstnrs. loop makes array seperate/indiv

