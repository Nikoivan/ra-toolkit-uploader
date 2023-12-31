import { nanoid } from 'nanoid';
import { AppDispatch } from './store';
import { uploaderActions } from './uploaderSlice';

export const uploadFile = (file: File, dispatch: AppDispatch) => {
  console.log(file);
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const fileInfo = {
      title: file.name,
      id: nanoid(4),
      url: reader.result?.toString(),
    };

    dispatch(uploaderActions.change(fileInfo));
  });
  reader.readAsDataURL(file);
};
