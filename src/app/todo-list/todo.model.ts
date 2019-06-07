export class Todo {

  constructor(title: string) {
    this.title = title || '';
  }

  private title = '';
  private completed = false;

  getTitle(): string {
    return this.title;
  }

  get done(): boolean {
    return this.completed;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }
}
