let todos = [];
let id = 0;
let output = document.querySelector('#output');
let tasks = document.querySelector('.tasks');
let addTaskButton = document.querySelector('#add-task-button');

function addTodo(content) {
  let todo = {
    id: id,
    content: content
  };
  todos.push(todo);
  id++;
  printTodo(todos);
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== parseInt(id, 10));
  printTodo(todos);
}

function completeTodo(id) {
  let todoItem = document.querySelector(`.item[data-id="${id}"]`);
  if (todoItem) {
    todoItem.style.backgroundColor = "rgb(113, 201, 157)"; // Изменяем цвет фона на выполненную задачу
    deleteTodo(id); // Удаляем задачу из списка
  }
}

function template(title, content, id) {
  let html_template = `
    <div class="item" data-id="${id}">
      <h2>${title}</h2>
      <p>${content}</p>
      <div class="buttons">
        <button onclick="completeTodo(${id})">Удалить</button>
      </div>
    </div>
  `;
  tasks.innerHTML += html_template;
}

// Пример использования
template('Сделать уроки', 'Выполнить 4 вариант ОГЭ русский язык', id);
template('Сходить в магазин', 'Купить колбасу и хлеб', id);
template('Убраться в комнате', 'Вытереть пыль, разобрать шкаф', id);
template('Почитсить компьютер', 'Убрать пыль и почистить видеокарту', id);
template('Погулять', 'Сходить в парк', id);

addTaskButton.addEventListener('click', function() {
  let content = prompt('Введите содержимое задачи:');
  if (content) {
    addTodo(content);
  }
});

function printTodo(todos) {
  tasks.innerHTML = ''; // Очищаем tasks перед добавлением новых задач
  for (let i = 0; i < todos.length; i++) {
    template('Новая задача', todos[i].content, todos[i].id);
  }
}

console.log(todos);