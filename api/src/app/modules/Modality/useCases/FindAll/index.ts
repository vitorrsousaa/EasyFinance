import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function FindaAll() {
  const modalities = await ModalityRepository.findAll();

  return modalities;
}
