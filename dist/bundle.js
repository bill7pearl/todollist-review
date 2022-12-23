"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["bundle"],{

/***/ "./src/add-remove.js":
/*!***************************!*\
  !*** ./src/add-remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayTodos": () => (/* binding */ DisplayTodos),
/* harmony export */   "updateIndices": () => (/* binding */ updateIndices)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_delete_completed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/delete-completed.js */ "./src/modules/delete-completed.js");


var todos = [];
function updateIndices() {
  var i = 1;
  todos.forEach(function (obj) {
    obj.index = i;
    i += 1;
    localStorage.setItem('todos', JSON.stringify(todos));
  });
}
function DisplayTodos() {
  var todoList = document.querySelector('#todo-list');
  // todoList.innerHTML = '';

  todos.forEach(function (todo) {
    var todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var span = document.createElement('span');
    var content = document.createElement('div');
    var actions = document.createElement('div');
    var edit = document.createElement('button');
    var deleteButton = document.createElement('button');
    var deleteSelected = document.querySelector('.deleteAll');
    input.type = 'checkbox';
    input.checked = todo.completed;
    span.classList.add('bubble');
    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('delete');
    content.innerHTML = "<input data-id=\"".concat(todo.index, "\" type=\"text\" value=\"").concat(todo.content, "\" readonly>");
    edit.innerHTML = 'Edit';
    deleteButton.innerHTML = 'Delete';
    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);
    todoList.appendChild(todoItem);
    if (todo.completed) {
      todoItem.classList.add('done');
    }
    input.addEventListener('change', function (e) {
      todo.completed = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));
      if (todo.completed) {
        todoItem.classList.add('done');
      } else {
        todoItem.classList.remove('done');
      }
      DisplayTodos();
    });
    edit.addEventListener('click', function () {
      var input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      edit.innerHTML = 'Save';
      input.addEventListener('blur', function (e) {
        input.setAttribute('readonly', true);
        todo.content = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });
    deleteButton.addEventListener('click', function () {
      todos = todos.filter(function (t) {
        return t !== todo;
      });
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
      updateIndices();
    });
    input.addEventListener('change', function () {
      deleteSelected.addEventListener('click', function () {
        if (todo.completed === true) {
          todos = todos.filter(function (t) {
            return t !== todo;
          });
          localStorage.setItem('todos', JSON.stringify(todos));
          DisplayTodos();
          updateIndices();
        }
      });
    });
  });
}
window.addEventListener('load', function () {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  var newTodoForm = document.querySelector('#new-todo-form');
  newTodoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var todo = new _modules_delete_completed_js__WEBPACK_IMPORTED_MODULE_1__["default"](todos.length + 1, e.target.elements.content.value, false);
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    e.target.reset();
    DisplayTodos();
  });
  DisplayTodos();
});

/***/ }),

/***/ "./src/modules/delete-completed.js":
/*!*****************************************!*\
  !*** ./src/modules/delete-completed.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Todo = /*#__PURE__*/_createClass(function Todo(index, content) {
  var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  _classCallCheck(this, Todo);
  this.index = index;
  this.content = content;
  this.completed = completed;
});


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/add-remove.js"));
/******/ }
]);
//# sourceMappingURL=bundle.js.map