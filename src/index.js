// import _ from 'lodash';
import './style.css';
import List from './modules/list.js';
import Task from './modules/task.js';
import Store from './modules/store.js';

const toDoList = document.getElementById('list-container');
const addBtn = document.querySelector('.return');

const ul = document.createElement('ul');
ul.classList.add('items');
ul.id = 'tasks';
toDoList.appendChild(ul);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.getElementById('description');
  if (input.value === '') {
    // list.alert('Book cannot be empty', 'danger');
  } else {
    const list = Store.getList();
    const index = list.length + 1;
    const newTask = new Task(input.value, false, index);
    List.add(newTask);
    Store.add(newTask);
  }
  input.value = '';
});

window.onload = () => {
  List.display();
  Store.updateIndex();
};
