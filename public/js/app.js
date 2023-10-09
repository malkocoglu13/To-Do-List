document.addEventListener('DOMContentLoaded', function () {
  const todoList = document.getElementById('todo-list');
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-button');

  addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        ${taskText}
        <button class="delete-task">Delete</button>
      `;
      todoList.appendChild(taskItem);
      taskInput.value = '';
    }
  });

  todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-task')) {
      e.target.parentElement.remove();
    }
  });
});
