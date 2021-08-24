import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './App';
import '../public/OGImage.png';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
