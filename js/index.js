const taskManager = new TaskManager();
const save = document.getElementById("save");
const taskName = document.getElementById("name");
const description = document.getElementById("description");
const assignedTo = document.getElementById("assignedTo");
const dueDate = document.getElementById("dueDate");
const status = document.getElementById("status");
const statusValue = status.value;
const email = document.getElementById("email");

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
                                    <option value="todo" placeholder="To Do" ${statusValue === 'todo'? "selected" : ""}>To Do</option>
                                    <option value="in-progress" ${statusValue === 'in-progress'? "selected" : ""}>In-Progress</option>
                                    <option value="done">Done</option>
                                </select>
                            </div>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Description</h5>
                            <p id ="descriptionCard" class="card-text">${description}</p>
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



const resetFunction = () => {
    taskName.value = '';
    description.value = ''; 
    assignedTo.value = '';
    dueDate.value = '';
    status.value = 'todo';
    email.value = '';
};


// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
  
//           form.classList.add('was-validated');
//         }, false)
//       })
//   })();





// //Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
        event.preventDefault();
        form.classList.add('was-validated');
        taskManager.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value, email.value);
        taskManager.render();
        resetFunction();
        }
      }, false);
    })
})();


// save.addEventListener('click', function(event) {
//     if (!description.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//         } else {
//             event.preventDefault();
//             description.classList.add('was-validated');
//             taskManager.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value, email.value);
//             taskManager.render();  
//         };
// });


// save.addEventListener('click', function(event) {
//     event.preventDefault();
//     taskManager.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value, email.value);
//     taskManager.render();
// });
