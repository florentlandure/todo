export interface Repository<T> {
  add(params: any): Promise<T>;
  getAll(): Promise<T[]>;
  getOneById(id: string): Promise<T>;
  delete(id: string): Promise<void>;
}
