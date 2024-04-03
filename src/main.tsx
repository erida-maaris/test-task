import './styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './App';
import store from './store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer position="bottom-center" />
  </Provider>
);
