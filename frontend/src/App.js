import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './page/Error404';
import Confirm from './page/test/Confirm';
import Formik from './page/test/Formik';
import Redux from './page/test/Redux';
import Nav from './components/Nav/Nav';
import Login from './page/user/Login';
import MUIFormik from './page/test/MUIFormik';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Redux />} />
        <Route path="/formik" exact element={<Formik />} />
        <Route path="/MUIFormik" exact element={<MUIFormik />} />

        <Route path="/confirm" exact element={<Confirm />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
