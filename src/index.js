import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Search from './components/Search';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

