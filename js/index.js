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

// Create a function t reset the values of the form's inputs
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


// You can comment this (lines 82-85 below) back in and then when you click the "X" on the alert it will go away, make sure to comment out the "setTimeout" function (lines 70 - 73 above) and uncomment the "button" associated with it as well (lines 31-33 in index.html) if you want to change the way the message is closed out. Currently it will show for 3 seconds. But you can make those changes so it stays until the user closes them if you want.
// closeDescriptionAlert.addEventListener("click", function(){
//     descriptionAlert.classList.remove("show");
//     descriptionAlert.classList.add("hide");
// })

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
    }
});


taskList.addEventListener('click', function(event) {
    // for (let i=0; i < taskManager.tasks.length; i++) {
    // console.log(taskManager.tasks[i].id);
    // }
    let element = event.target;
    console.log(element);
    let buttonClasses =element.classList;
    let dataId = element.getAttribute("data-id");
    const statusList = document.getElementById("list");
    let currentStatus = event.target.value;
    console.log(currentStatus);
    const done = document.getElementById("done");
    const todo = document.getElementById("todo");
    const inProgress = document.getElementById("in-progress");
    const list = document.getElementById(element.id);
    console.log(element.id);
    if(element.id) {
        if (currentStatus === 'done') {
            console.log(list.options.length);
            $("list").val('done');
            // list.options[list.options[2]] = true;
            list.style.backgroundColor =  '#00e600';
            console.log(done);
            taskManager.updateStatus(dataId, element.value);
            taskManager.save();
            // taskManager.load();
        } else if (currentStatus === 'todo') {
            list.style.backgroundColor =  '#ffcce0';
            taskManager.save();
       } else if (currentStatus === 'in-progress') {
             list.style.backgroundColor =  '#ffff80';
            taskManager.save();
         }
    };
    if (buttonClasses.value.includes("delete-button")){
        taskManager.deleteTask(dataId);
        taskManager.save();
        taskManager.render();
    };
});

// if (element.children.length === 3) {
    //     taskManager.updateStatus(dataId, element.value);
    //     taskManager.save();
    //     taskManager.render();
    //     console.log(element.value);