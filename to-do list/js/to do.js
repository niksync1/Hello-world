var addButton = document.getElementById("add")
var taskInput = document.getElementById("task")
var taskList = document.getElementById("taskList")
//add new item to  task list
addButton.addEventListener("click", function(){
     var task = taskInput.value;
    //Dont add an empty string
    if (task.trim()){
        //add new task list item
        var newItem = document.createElement("li");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        //clear text input
        taskInput.value="";
        //add remove option for new item
        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Done";
        removeButton.className = "remove";
        removeButton.addEventListener("click",removeTask);
        newItem.appendChild(removeButton)
        taskList.appendChild(newItem);
    }
    else{
        alert("task cannot be empty")
    }
});
var clear = document.getElementById("clear")
clear.addEventListener("click",function(){
taskList.innerHTML = ""});
//remove task from list
function removeTask(e){
    //get the parent list item to remove
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem)
}
