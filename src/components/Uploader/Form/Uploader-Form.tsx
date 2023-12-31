import { ChangeEvent } from 'react';
import { uploadFile } from '../../../store/thunks';
import { useAppDispatch } from '../../../store/store';
import iconUrl from './icons/Attach_40913.png';
import './Uploader-Form.css';

export default function UploaderForm() {
  const dispatch = useAppDispatch();
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      uploadFile(e.target.files[0], dispatch);
    }
  };

  return (
    <div className='Uploader-Form'>
      <input
        onChange={changeHandler}
        type='file'
        className='Form-Input_type_file'
      />
      <span className='Form-Label_type_file'>
        Выберите файл для загрузки <img className='Label-Icon' src={iconUrl} />
      </span>
    </div>
  );
}
