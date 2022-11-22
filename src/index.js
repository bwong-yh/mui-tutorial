import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// mui
import { CssBaseline } from '@mui/material';
// pages
import App from './App';
import Authentication from './pages/Authentication';
import Database from './pages/Database';
import Functions from './pages/Functions';
import Hosting from './pages/Hosting';
import MachineLearning from './pages/MachineLearning';
import Storage from './pages/Storage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Authentication />} />
          <Route path='/database' element={<Database />} />
          <Route path='/storage' element={<Storage />} />
          <Route path='/hosting' element={<Hosting />} />
          <Route path='/functions' element={<Functions />} />
          <Route path='/machinelearning' element={<MachineLearning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
