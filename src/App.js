import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';
const App = () => {
  return (
    <div className='main-section'>
      <Container>
        <div className='main-header'>
          <h1 className='main-title'>Let's sort it!</h1>
        </div>
        <Dashboard />
      </Container>
      <Footer/>
    </div>
  );
};

render(<App />, document.getElementById('root'));
