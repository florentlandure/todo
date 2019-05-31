import { AddTodoParams } from './types';
import { ValidationError } from './common';
import { Todo } from './Todo';

export class TodoValidator {
  private _errors: ValidationError[] = [];

  validate(params: AddTodoParams): boolean {
    this._errors = [];
    return (
      this.hasValidTitle(params.title) &&
      this.hasValidDescription(params.description)
    );
  }

  hasValidLength(key: string, value: string): boolean {
    return value.length <= Todo.characterLimit[key];
  }

  hasValidTitle(title: string): boolean {
    const hasTitle: boolean = !!title;
    const hasValidLength: boolean = this.hasValidLength('title', title);

    if (!hasTitle) {
      this._errors.push({ field: 'title', message: 'required' });
    } else if (!hasValidLength) {
      this._errors.push({ field: 'title', message: 'over_character_limit' });
    }

    return hasTitle && hasValidLength;
  }

  hasValidDescription(description: string): boolean {
    return !description || this.hasValidLength('description', description);
  }

  get errors(): ValidationError[] {
    return this._errors;
  }
}
