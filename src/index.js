import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './custom-hooks/user';
import { BrowserRouter } from 'react-router-dom';
// import actionCable from 'actioncable'


// const CableApplication ={}
// CableApplication.cable = actionCable.createConsumer("ws://localhost:3000/cable")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

