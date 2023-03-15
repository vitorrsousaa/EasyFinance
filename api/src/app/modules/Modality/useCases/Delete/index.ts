import AppError from '../../../../error';
import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function Delete(id: string) {
  if (!id) throw new AppError('Modality ID is required!');

  const findModality = await ModalityRepository.findById(id);
  if (!findModality) throw new AppError('Modality does not exists', 404);

  await ModalityRepository.delete(id);
  return 'Modality Delected!';
}
