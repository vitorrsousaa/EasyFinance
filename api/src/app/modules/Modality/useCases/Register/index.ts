import AppError from '../../../../error';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function Register(name: string, icon: string, requestBody: Record<string, any>[]) {
  returnErrorMissingField(
    requestBody,
    ['name', 'icon'],
  );

  const modalityExists = await ModalityRepository.findByName(name);
  if (modalityExists) throw new AppError('Modality already exists!');

  const newModality = await ModalityRepository.create(name, icon);

  return {
    modality: newModality
  };
}
