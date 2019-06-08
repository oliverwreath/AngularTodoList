import {Component, OnInit} from '@angular/core';
import {TodoListService} from './todo-list.service';
import {Todo} from './todo.model';
import {TodoStatusType} from './todo-status-type.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoStatusType = TodoStatusType;
  private status = TodoStatusType.All;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  addTodo(inputRef: HTMLInputElement): void {
    const todo = inputRef.value.trim();
    console.log(todo);

    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }
  }

  getList(): Todo[] {
    switch (this.status) {
      case TodoStatusType.Active:
        return this.getRemainingList();
      case TodoStatusType.Completed:
        return this.getCompletedList();
      default:
        return this.todoListService.getList();
    }
  }

  remove(i: number): void {
    this.todoListService.remove(i);
  }

  edit(todo: Todo): void {
    todo.editing = true;
  }

  update(todo: Todo, newTitle: string): void {
    const title = newTitle.trim();

    // 如果有輸入名稱則修改事項名稱
    if (title) {
      todo.setTitle(title);
      todo.editing = false;

      // 如果沒有名稱則刪除該項待辦事項
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }
  }

  cancelEditing(todo: Todo): void {
    todo.editing = false;
  }

  getRemainingList(): Todo[] {
    return this.todoListService.getAllByCompleted(false);
  }

  getCompletedList(): Todo[] {
    return this.todoListService.getAllByCompleted(true);
  }

  setStatus(status: number): void {
    this.status = status;
  }

  checkStatus(status: number): boolean {
    return this.status === status;
  }

  removeCompleted(): void {
    this.todoListService.removeCompleted();
  }
}
