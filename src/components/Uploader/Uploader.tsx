import UploaderForm from './Form/Uploader-Form';
import UploaderList from './List/Uploader-List';
import UploaderPreview from './Preview/Uploader-Preview';
import './Uploader.css';

const Uploader = () => {
  return (
    <div className='Uploader-Container'>
      <header className='Uploader-Header'>
        <h2 className='Header-Title'>Uploader</h2>
      </header>
      <main className='Uploader-Main'>
        <UploaderPreview />
        <UploaderForm />
        <UploaderList />
      </main>
      <footer className='Uploader-Footer'></footer>
    </div>
  );
};

export default Uploader;
