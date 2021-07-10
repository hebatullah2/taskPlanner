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
            const date = new Date(currentTask.dueDate);
            const formattedDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear();
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
// console.log(task1)
