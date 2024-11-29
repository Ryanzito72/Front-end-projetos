var taskInput = document.getElementByID("new-task");
var addButton = document.getElementByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("Completed-tasks");

var createNewTaskElement = function (taskString){
var listItem = document.createElement("li")


var checkBox = document.createElement("input");
var label = document.createElement("label");
var editInput = document.createElement("input")
var editButton = document.createElement("button");
var deleteButton = document.createElement("button");

label.innerText = taskString;

checkBox.type ="checkbox";
editInput.type = "text";
editButton.innerText = "Edit";
editButton.className = "edit";
deleteButton.innerText = "Delete";
DeleteButton.className = "delete";

listItem.appendChild(checkBox);
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);
return listItem;};

taskInput.value = "";};

















