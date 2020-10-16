import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import routesConfig from './routesConfig'
import  Footer from "./pages/footer/footer"


function App() {
  return (
    <div className="App">
      <header  >
        <nav className="floating">
        <Link to="/user">user</Link>
        <br></br>
        <Link to="/">home</Link>
        <br></br>
        <Link to="/login">login</Link>
        </nav>
      </header>
      {routesConfig.map(
        (value, key) => {
          return <Route key={key} path={value.path} component={value.component} exact={value.exact}
          ></Route>
        }
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
