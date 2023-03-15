import Modality, { TModality } from '../../model';
import { IModalityRespository } from '../IModalityRepository';

class ModalityRepository implements IModalityRespository {
  async create(name: string, icon: string): Promise<TModality> {
    return Modality.create({ name, icon });
  }

  async findByName(name: string): Promise<TModality | null> {
    return Modality.findOne({ name });
  }

  async findById(id: string): Promise<TModality | null> {
    return Modality.findById(id);
  }

  async findAll(): Promise<TModality[] | null> {
    return Modality.find().sort({ name: 1 });
  }

  async delete(id: string): Promise<void | null> {
    return Modality.findByIdAndDelete(id);
  }
}

export default new ModalityRepository();
