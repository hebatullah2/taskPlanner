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

// Create a function to return the HTML for each individual task
const createTaskHtml = (name, description, assignedTo, dueDate, statusValue, email) => {
    const html = 
               `<li>
                    <section class="card text-center">
                        <div class="card-header">
                            <div class="float-left">
                                Name: ${name}
                            </div>
                            <br>
                            <div class="float-left">
                                Assigned to: ${assignedTo}
                            </div>
                            <br>
                            <div class="float-left">
                                <label for="list">Status:</label>
                                <select name="status" id ="list">
                                    <option value="todo" placeholder="To Do" ${statusValue === 'todo'?"selected":""}>To Do</option>
                                    <option value="in-progress" ${statusValue === 'in-progress'?"selected":""}>In-Progress</option>
                                    <option value="done">Done</option>
                                </select>
                            </div>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Description</h5>
                            <textarea id ="descriptionCard" class="card-text">${description}</textarea>
                            <br>
                            <!-- <button type="button" class="btn btn-danger">Delete</button> -->
                            <a href="#" class="btn btn-danger">Delete</a>
                        </div>

                        <div class="card-footer">
                            <div class="float-left">
                                Due Date: ${dueDate}
                            </div>
                            <br>
                            <div class="float-left">
                                Email: ${email}
                            </div>
                         </div>
                    </section>
                </li>`
    return html;
};
// to test createTaskHtml function
// const taskHtml = createTaskHtml('Person1','clean','Person2','07/08/2021','Todo', 'person@gmail.com');
// console.log(taskHtml);

const toggleShowAlert = () => {
    
}

const validFormFieldInput = (data) => {
   if (data.length < 1) {
    descriptionAlert.classList.remove("hide");
    descriptionAlert.classList.add("show");
    setTimeout(()=>{
        descriptionAlert.classList.remove("show");
        descriptionAlert.classList.add("hide");
    }, 3000)
    
    return false;
    }else {
        return true;
    }
}

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
    }
});
