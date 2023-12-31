import { getAllowedTitle } from '../../../assets/services/services.utils';
import { UploadType } from '../../../store/uploaderSlice';
import './Uploader-Item.css';

const UploaderItem = ({ url, title }: UploadType) => (
  <li className='Uploader-Item'>
    <img src={url} alt={title} className='UploaderItem-Image' />
    <h4 className='UploaderItem-Title'>{title && getAllowedTitle(title)}</h4>
  </li>
);

export default UploaderItem;
