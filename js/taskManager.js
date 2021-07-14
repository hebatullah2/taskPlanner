// Create a function to return the HTML for each individual task
const createTaskHtml = (id, name, description, assignedTo, dueDate, statusValue, email) => {
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
                                    <option value="done" id="done">Done</option>
                                </select>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Description</h5>
                            <p id ="descriptionCard" class="card-text">${description}</p>
                           <!-- <textarea id ="descriptionCard" class="card-text">${description}</textarea>-->
                            <br>
                            <button type="button" class="btn btn-danger delete-button" data-id=${id}>Delete</button>
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
//create a class that will be responsible for managing the tasks in the application 
class TaskManager {
    constructor(currentId = '0'){
        this.tasks = [];
        this.currentId = currentId;
    }
    // This function creates a task
    addTask(name, description, assignedTo, dueDate, status, email = ' ') {
        this.currentId++;
        this.tasks.push({id: this.currentId , name, description, assignedTo, dueDate, status, email});
    }
    //Create a function to render our tasks, so that they are visible on the page
    render() {
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length; i++) {
            const currentTask = this.tasks[i];
            // console.log(dueDate.value)
            // let formattedDate;
            // if (dueDate.value != '') {
            //     let date = new Date(currentTask.dueDate);
            //     formattedDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear(); 
            //  } else {
            //      formattedDate = 'No due date';
            //  };
            const date = new Date(currentTask.dueDate);
            const formattedDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear();
            const taskHtml = createTaskHtml(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status, currentTask.email);
            tasksHtmlList.push(taskHtml);
        };
        const tasksHtml = tasksHtmlList.join("\n");
        const taskList = document.querySelector("#taskList");
        taskList.innerHTML = tasksHtml;
    }
    save() {
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", tasksJson);
        let currentId = String(this.currentId);
        console.log(currentId);
        localStorage.setItem("currentId", currentId);
    }
    load() {
        if (localStorage.getItem("tasks")) {
            let tasksJson = localStorage.getItem("tasks");
            this.tasks = JSON.parse(tasksJson);
        };
        if (localStorage.getItem("currentId")) {
            let currentIdString = localStorage.getItem("currentId");
            this.currentId = Number(currentIdString);
        }           
    }
    // The function delete a task
    deleteTask(id) {
        let tasksToKeep = this.tasks.filter(task => task.id != id);
        this.tasks = tasksToKeep;
    }
};
// to test the code of the class
// const task1 = new TaskManager();
// console.log(task1.tasks);
// console.log(task1.currentId);
// task1.addTask('Person1','clean','Person2','07/08/2021','Todo', 'person@gmail.com');
// console.log(task1.tasks)
// console.log(task1)