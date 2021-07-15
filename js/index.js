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
// to test createTaskHtml function
// const taskHtml = createTaskHtml('Person1','clean','Person2','07/08/2021','Todo', 'person@gmail.com');
// console.log(taskHtml);

const resetFunction = () => {
    taskName.value = '';
    description.value = ''; 
    assignedTo.value = '';
    dueDate.value = '';
    status.value = 'todo';
    email.value = '';
};
// const toggleShowAlert = () => {
// }
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

const createStatusClassListener = () => {
    const statusClass = document.getElementsByClassName("statusClass");
    statusClass.addEventListener('click', function(event) {
        let element = event.target;
        let dataId = element.getAttribute("data-id");
        let currentStatus = event.target.value;
        //console.log(listId.id);
        //const done = document.getElementById("done");
        taskManager.updateStatus(dataId, currentStatus);
        taskManager.save();
        taskManager.render();
        console.log(element.value);
    });
};

save.addEventListener('click', function(event) {
    event.preventDefault();
    if (validFormFieldInput(description.value)) {
    taskManager.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value, email.value);
    taskManager.render();
    resetFunction();
    taskManager.save();
    taskManager.load();
    taskManager.render();
    const taskValueRender = taskManager.render();
    console.log(taskValueRender);
    if (taskValueRender) {
        createStatusClassListener();
        };
    };
});
taskList.addEventListener('click', function(event) {
    //event.preventDefault();
    // for (let i=0; i < taskManager.tasks.length; i++) {
    // console.log(taskManager.tasks[i].id);
    // }
    let element = event.target;
    // console.log(element.children);
    let buttonClasses = element.classList;
    let dataId = element.getAttribute("data-id");
    // let currentStatus = event.target.value;
    // let checkId = element.id;
    // const listId = document.getElementById(checkId);
    //console.log(listId.id);
   //const done = document.getElementById("done");
    // if (element.children.length === 3) {
    //     taskManager.updateStatus(dataId, element.value);
    //     taskManager.save();
    //     taskManager.render();
    //     console.log(element.value);
    // };
    if (buttonClasses.value.includes("delete-button")){
        taskManager.deleteTask(dataId);
        taskManager.save();
        taskManager.render();
    };
});

