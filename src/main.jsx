// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './styles/index.css';
// import './styles/color.css';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>,
  // )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/color.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
