import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
// import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';
const App = () => {
  return (
    <div className='main-section'>
      {/* <div className='container'> */}
      <Container>
        <div className='main-header'>
          <h1 className='main-title'>Let's sort it!</h1>
        </div>
        <Dashboard />
        {/* <Login /> */}
        {/* <Footer /> */}
      {/* </div> */}
      </Container>
    </div>
  );
};

render(<App />, document.getElementById('root'));
