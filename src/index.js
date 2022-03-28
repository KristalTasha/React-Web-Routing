import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Invoice from './views/invoice';
import Invoices from './views/invoices';
import Expenses from './views/expenses';


import Pages from './views/components'

import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Pages.HomeIndex/>} />
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />}>
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path="*" element={<Pages.Notfound />} />
        </Route>
      </Routes>

    </React.StrictMode>,
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
