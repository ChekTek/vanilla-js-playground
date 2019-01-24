/** This class is tightly coupled to the dom, and should probably be refactored. */
export default class TaskList {
    constructor(divElementId) {

        this.self = document.getElementById(divElementId);

        //If they don't provide an ID just create a task list anyways since this is just a playground.
        if (!this.self) {
            //throw new Error('You must provide the id of the div you want to make a task list in.');
            divElementId = 'default-task-list-id';
            let defaultDiv = document.createElement('div');
            defaultDiv.setAttribute('id', divElementId);
            document.body.prepend(defaultDiv);
        }

        this.self = document.getElementById(divElementId);
        this.self.innerHTML += '<input class="new-task-input" value="" />';
        this.self.innerHTML += '<button class="add-task-button">Add Task</button>';
        this.self.innerHTML += '<div class="task-container"></div>';
        this.taskInput = this.self.querySelector('.new-task-input');
        this.taskContainer = this.self.querySelector('.task-container');
        this.taskButton = this.self.querySelector('.add-task-button');
        this.tasks = [];
        this.taskButton.addEventListener('click', this.addTask.bind(this));
    }

    addTask() {
        let newTask = this.taskInput.value;
        this.tasks.push(newTask);
        this.taskContainer.innerHTML += `<div class="task">${newTask}</div>`;
    }
}