export class TodoEntity {
  title: string;
  description: string;
  isCompleted: boolean = false;
  maxTitleLength: number = 100;
  maxDescriptionLength: number = 250;

  constructor(title: string, description?: string) {
    this.title = title;
    this.description = description;
  }

  get isValid(): boolean {
    return this.hasValidTitle && this.hasValidDescription;
  }

  get hasValidTitle(): boolean {
    return !!this.title && this.title.length <= this.maxTitleLength;
  }

  get hasValidDescription(): boolean {
    return (
      !this.description || this.description.length <= this.maxDescriptionLength
    );
  }
}
