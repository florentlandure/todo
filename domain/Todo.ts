export class Todo {
  private _title: string;
  private _description: string;
  private _isCompleted: boolean;
  static readonly characterLimit = {
    title: 100,
    description: 250
  };

  constructor(title: string, description?: string) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  set isCompleted(isCompleted: boolean) {
    this._isCompleted = isCompleted;
  }
}
