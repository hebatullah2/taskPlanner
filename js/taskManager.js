// Create a function to return the HTML for each individual task
const createTaskHtml = (name, description, assignedTo, dueDate, status, email) => {
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
                                    <option value="todo" placeholder="To Do">To Do</option>
                                    <option value="in-progress" placeholder="In-Progress">In-Progress</option>
                                    <option value="review" placeholder="Review">Review</option>
                                </select>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Description</h5>
                            <p class="card-text">${description}</p>
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
//create a class that will be responsible for managing the tasks in the application 
class TaskManager {
    constructor(currentId = '0'){
        this.tasks = [];
        this.currentId = currentId;
    }
    // This function creates a task
    addTask(name, description, assignedTo, dueDate, status = 'TODO', email = ' ') {
        this.currentId++;
        this.tasks.push(this.currentId , name , description, assignedTo, dueDate, status, email);
    }
    //Create a function to render our tasks, so that they are visible on the page
    render() {
        let tasksHtmlList = [];
        for(let i=0; i < this.tasks.length; i++) {
            const currentTask = this.tasks[i];
            const date = new Date(this.tasks[i].dueDate);
            const formattedDate = Date.toString(date);
            const taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status, currentTask.email);
            tasksHtmlList.push(taskHtml);
        };
        const tasksHtml = tasksHtmlList.join("\n");
        const taskList = document.querySelector("#taskList");
        taskList.innerHTML = tasksHtml;

    }
};
// to test the code of the class
// const task1 = new TaskManager();
// console.log(task1.tasks);
// console.log(task1.currentId);
// task1.addTask('Person1','clean','Person2','07/08/2021','Todo', 'person@gmail.com');
// console.log(task1.tasks)