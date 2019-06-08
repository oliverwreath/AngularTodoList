export class Todo {

  constructor(title: string) {
    this.title = title || '';
  }

  private title = '';
  private completed = false;
  private isEditing = false;

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  get done(): boolean {
    return this.completed;
  }

  get editing(): boolean {
    return this.isEditing;
  }

  set editing(value: boolean) {
    this.isEditing = value;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }

  setCompleted(completed: boolean): void {
    this.completed = completed;
  }
}
