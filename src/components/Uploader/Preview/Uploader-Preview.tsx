import { getAllowedTitle } from '../../../assets/services/services.utils';
import { useAppSelector } from '../../../store/store';
import './Uploaded-Preview.css';

export type PreviewProps = {
  title: string;
  url: string;
};

const UploaderPreview = () => {
  const fileData = useAppSelector((state) => state.uploader.lastUpload);
  const { title, url } = fileData;

  return (
    <div className='Uploader-Preview'>
      {url && title && (
        <>
          <h3 className='Preview-Title'>Last uploaded image</h3>
          <img src={url} alt={title} className='Preview-Image' />
          <span className='Preview-FileName'>{getAllowedTitle(title)}</span>
        </>
      )}
    </div>
  );
};

export default UploaderPreview;
