import { useAppSelector } from '../../../store/store';
import UploaderItem from '../Item/Uploader-Item';
import './Uploader-List.css';

const UploaderList = () => {
  const uploadedList = useAppSelector((state) => state.uploader.uploaded);

  return (
    <ul className='Uploader-List'>
      {uploadedList.map((item) => (
        <UploaderItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default UploaderList;
