//open with current date
var currentDate= moment().format("dddd, MMMM Do YYYY");
var currentHour=moment().format("kk");
console.log(currentDate)
console.log(currentHour)
var hour=document.querySelectorAll(".hour")
var state = document.querySelectorAll(".description")
console.log(state)
var saveButtons=document.querySelectorAll(".saveBtn")
document.getElementById("currentDay").textContent=currentDate



//Ifs for past present future
for (var i=0; i<state.length; i ++){
    if (hour[i].textContent<currentHour){
        state[i].setAttribute(
        "style", "background-color:gray"
    )
    } else if (hour[i].textContent>currentHour){
        state[i].setAttribute(
        "style", "background-color: blue"
    )} else {
        state[i].setAttribute(
            "style", "background-color: green"
        )
    }
}

//save buttons
//var buttons=document.querySelectorAll(".saveBtn")
//console.log(buttons)
//for (var i=0; i<buttons.length; i++){}
//buttons.addeventlistner("click", function(){})

//for loop buttons [i].addeventlistener (cuz cant do evnt lstnr to array)
//adding idiv evnt lstnrs. loop makes array seperate/indiv

function saveTodos(){
    var tasks={
      comment: comment.value.trim()
    };
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTodos(){
    var savedTask =JSON.parse(localStorage.getItem("tasks"));
    if (savedTask!==null){
        document.querySelectorAll(".description col-10").innerhtml = savedTask.comment;
    } else{
        return;
    }
}
saveButtons.addEventListener("click", function(event){
    event.preventDefault();
    saveTodos();
    (renderTodos);
});

function init(){
    renderTodos();
}
init();