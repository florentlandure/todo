export interface Repository<T> {
  add(data: T): Promise<T>;
  getAll(): Promise<T[]>;
  getOneById(id: string): Promise<T>;
  delete(id: string): Promise<void>;
}
