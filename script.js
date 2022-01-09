//open with current date
var currentDate= moment().format("dddd, MMMM Do YYYY");
var currentHour=moment().format("ha");
console.log(currentDate)
console.log(currentHour)
var hour=querySelectorAll(".hour col-1")
var state = querySelectorAll(".description col-10")
var tasks =localStorage.getItem("tasks")

document.getElementById("currentDay").textContent=currentDate

//Ifs for past present future
if (hour<currentHour){
    state.setAttribute(
    "style", "background-color:gray"
)
} else if (hour>currentHour){
    state.setAttribute(
    "style", "background-color: blue"
)} else {
    state.setAttribute(
        "style", "background-color: green"
    )
}

//save buttons
var buttons=document.querySelectorAll(".saveBtn")
console.log(buttons)
for (var i=0; i<buttons.length; i++){
}
//localStorage.setItem("taks", tasks)

//buttons.addeventlistner("click", function(){})

//for loop buttons [i].addeventlistener (cuz cant do evnt lstnr to array)
//adding idiv evnt lstnrs. loop makes array seperate/indiv