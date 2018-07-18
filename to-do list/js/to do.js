var addButton = document.getElementById("add")
var taskInput = document.getElementById("task")
var taskList = document.getElementById("taskList")
//add new item to  task list
addButton.addEventListener("click", function(){
     var task = taskInput.value;
    //Dont add an empty string
    if(task.trim()){
        //add new task list item
        var newItem = document.createElement("li");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        //clear text input
        taskInput.value="";
        taskList.appendChild(newItem);
    }
    else{
        alert("task cannot be empty")
    }
});
