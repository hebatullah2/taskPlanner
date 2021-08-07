const taskManager = new TaskManager();
const save = document.getElementById("save");
const taskName = document.getElementById("name");
const description = document.getElementById("description");
const assignedTo = document.getElementById("assignedTo");
const dueDate = document.getElementById("dueDate");
const status = document.getElementById("status");
const statusValue = status.value;
const email = document.getElementById("email");
const closeDescriptionAlert = document.getElementById("closeDescriptionAlert");
const descriptionAlert = document.getElementById("descriptionAlert");
const taskList = document.getElementById("taskList");

taskManager.load();
taskManager.render();

const resetFunction = () => {
    taskName.value = '';
    description.value = ''; 
    assignedTo.value = '';
    dueDate.value = '';
    status.value = 'todo';
    email.value = '';
};

const validFormFieldInput = (data) => {
   if (data.length < 1) {
    descriptionAlert.classList.remove("hide");
    descriptionAlert.classList.add("show");
    setTimeout(()=>{
        descriptionAlert.classList.remove("show");
        descriptionAlert.classList.add("hide");
    }, 5000)
    return false;
    }else {
        return true;
    }
};

const changeStatus = function (val, event) {
    let children = event.target.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].value === val) {
            let dataId = children[i].getAttribute("data-id");
            taskManager.updateStatus(dataId, val);
            taskManager.save();
            taskManager.render();
        };
    };
}

// event listeners 

save.addEventListener('click', function(event) {
    event.preventDefault();
    if (validFormFieldInput(description.value)) {
    taskManager.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value, email.value);
    taskManager.render();
    resetFunction();
    taskManager.save();
    taskManager.load();
    taskManager.render();
    };
});

taskList.addEventListener('click', function(event) {
    let element = event.target;
    let buttonClasses = element.classList;
    let dataId = element.getAttribute("data-id");
    if (buttonClasses.value.includes("delete-button")){
        taskManager.deleteTask(dataId);
        taskManager.save();
        taskManager.render();
    };
});


