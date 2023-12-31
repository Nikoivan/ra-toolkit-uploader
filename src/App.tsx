import { Provider } from 'react-redux';
import Uploader from './components/Uploader/Uploader';
import { store } from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Uploader />
    </Provider>
  );
}

export default App;

