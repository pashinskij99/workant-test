import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'
import {StrictMode} from "react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
