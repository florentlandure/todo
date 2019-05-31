export interface Repository<T> {
  createOne(params: any): Promise<T>;
  getAll(): Promise<T[]>;
  getOneById(id: string): Promise<T>;
  deleteOneById(id: string): Promise<void>;
  deleteAll(): Promise<void>;
}
