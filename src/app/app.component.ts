import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  todos = ["Take water every hour!"];

  addTodo(value:string)
  {
    var newValue = value;
    
    this.todos.push(newValue);
  }
  deleteTodo(todo:string)
  {
    var delTodo = todo;
    this.todos = this.todos.filter(
      t => t !== todo);
  }
}
