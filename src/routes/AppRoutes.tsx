import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.tsx';

function AppRoutes() {
  return(
    <Router>
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes
