export default class Todo {
  constructor(index, content, completed = false) {
    this.index = index;
    this.content = content;
    this.completed = completed;
  }
}