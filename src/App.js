import React from 'react';
import './App.css';
import { Outlet, Link} from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';


function App() {

  return (
    <div className='App'>
        <div >
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to='/Home'>Home</Link> | {" "}
            <Link to='/Search'>Search</Link>
          </nav>
          <Outlet />
        </div>
    </div>
  );
}

export default App;
