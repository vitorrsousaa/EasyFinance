import { TModality } from '../model';

export interface IModalityRespository {
  create(name: string, icon: string): Promise<TModality>;
  findByName(name: string): Promise<TModality | null>;
  findById(id: string): Promise<TModality | null>;
  findAll(): Promise<TModality[] | null>;
  delete(id: string): Promise<void | null>;
}
