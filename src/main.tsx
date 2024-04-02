import './styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <App />
    <ToastContainer position="bottom-center" />
  </>
);
