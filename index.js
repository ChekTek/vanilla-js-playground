class TaskList {
  constructor(divElementId) {
      this.self = document.getElementById(divElementId);
      this.self.innerHTML += '<input class="new-task-input" value="" />';
      this.self.innerHTML += '<button class="add-task-button">Add Task</button>';
      this.self.innerHTML += '<div class="task-container"></div>';
      this.taskInput = this.self.querySelector('.new-task-input');
      this.taskContainer = this.self.querySelector('.task-container');
      this.taskButton = this.self.querySelector('.add-task-button');
      this.tasks = [];
      this.taskButton.addEventListener('click',this.addTask.bind(this));
  }

  addTask() {
      let newTask = this.taskInput.value;
      this.tasks.push(newTask);
      this.taskContainer.innerHTML += `<div class="task">${newTask}</div>`;
  }
}

var myList = new TaskList('my-task-list');
