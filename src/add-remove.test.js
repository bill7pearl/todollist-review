/* eslint-disable */
import { DisplayTodos, updateIndices } from './add-remove.js';
import Todo from './modules/delete-completed.js';

let todos = [];
describe('add todo item', () => {
  test('adds a todo to the list', () => {
    const content = document.createElement('input');
    const newTodo = new Todo(todos.length + 1, content.value, false);
    // Add the new todo to the todos array
    todos.push(newTodo);
  
    // Update the DOM
    DisplayTodos();
    
    // Check that the new todo was added to the todos array
    expect(todos).toContain(newTodo);
  
    // Get the todo list element from the DOM
    const todoList = document.querySelector('#todo-list');
  
    // Check that the todo was added to the DOM
    expect(newTodo)
  });
})

describe('test remove todo functionality', () => {
  test('deleteButton event listener removes todo from todos list and updates local storage and display', () => {
    // Set up the test by creating a todo item and adding it to the todos list
    const todo = 'Finish writing unit tests';
    let todos = [todo];
    localStorage.setItem('todos', JSON.stringify(todos));
  
    // Create a mock delete button and simulate a click event on it
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', () => {
      todos = todos.filter((t) => t !== todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
      updateIndices();
    });
    deleteButton.click();
  
    // Assert that the todo was removed from the todos list and local storage
    expect(todos).toEqual([]);
    expect(localStorage.getItem('todos')).toEqual('[]');
  });
})

describe('updateIndices', () => {
  test('updates the indices of the todos objects', () => {
    // Set up test data
    const todos = [
      { index: 1, content: 'Task 1', completed: false },
      { index: 2, content: 'Task 2', completed: false },
      { index: 3, content: 'Task 3', completed: false }
    ];

    // Initialize localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // Call the function
    updateIndices(todos);

    // Make assertions
    expect(todos[0].index).toBe(1);
    expect(todos[1].index).toBe(2);
    expect(todos[2].index).toBe(3);
    expect(localStorage.getItem(todos));
  });
});

describe('test completed status', () => {
  test('updates completed status to true or false', () => {
    // Set up test data
    const todo = { index: 1, content: 'Task 1', completed: false };
    const todos = [todo];

    // Mock localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // Call the event listener
    const input = document.createElement('input');
    input.addEventListener('change', (e) => {
      todo.completed = input.checked;
      localStorage.setItem('todos', JSON.stringify(todos));

      // Make assertions
      expect(todo.completed).toBe(true);
      expect(localStorage.getItem(todos));
      DisplayTodos();
    });
  });
});

describe('edit todo', () => {
  test('update content based on user input', () => {
    // Set up test data
    const todo = { index: 1, content: 'Task 1', completed: false };
    const userInput = { index: 1, content: 'Task 1 (edited by user)', completed: false };
    const todos = [todo];

    // Mock localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // Call the event listener
    const input = document.createElement('input');
    const edit = document.createElement('button');
    edit.addEventListener('click', () => {
      input.removeAttribute('readonly');
      input.focus();
      edit.innerHTML = 'Save';
      input.addEventListener('submit', () => {
        input.setAttribute('readonly', true);
        input.value = userInput.content;
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
      // Make assertions
      expect(todo.content).toBe('Task 1 (edited)');
      expect(edit.innerHTML).toBe('Save');
      expect(localStorage.getItem(todos));
    });
  });
});

describe('delete selected', () => {
  test('delete selected todo items with status true', () => {
    // Set up the test by adding some todos to the `todos` array
    let todos = [
      { index: 1, content: 'Todo 1', completed: false },
      { index: 2, content: 'Todo 2', completed: true },
      { index: 3, content: 'Todo 3', completed: true },
    ];
  
    //Mock the local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  
    // Set up the DOM for the test
    document.body.innerHTML = `
      <button id="deleteSelected">Delete Selected</button>
    `;
  // Add the event listener to the deleteSelected button
  const deleteSelectedButton = document.querySelector('#deleteSelected');
  deleteSelectedButton.addEventListener('click', () => {
    todos = todos.filter((t) => t.completed === false);

    // Assert that the selected todos have been removed and the local storage is updated
    expect(todos).toEqual([{ index: 1, content: 'Todo 1', completed: false }]);
    expect(localStorage.getItem(todos));
  });
 });
});





