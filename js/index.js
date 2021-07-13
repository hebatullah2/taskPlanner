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


const toggleShowAlert = () => {
}



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
    const statusList = document.getElementById("list");
    let element = event.target;
    let currentStatus = event.target.value;
    const done = document.getElementById("done");
    if(element.id === 'list') {
        if (currentStatus === 'done') {
            list.style.backgroundColor =  '#00e600';
        } else if (currentStatus === 'todo') {
            list.style.backgroundColor =  '#ffcce0';
        } else if (currentStatus === 'in-progress') {
            list.style.backgroundColor =  '#ffff80';
        }
    }
});

