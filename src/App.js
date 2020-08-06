import React, { useEffect } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Dashboard from './Dashboard';
import Footer from './Footer';
import * as ga from './analytics';
import GithubCorner from './GithubCorner';

const App = () => {
  ga.initGA();
  useEffect(() => {
    ga.logPageView();
  }, []);

  return (
    <div className='main-section'>
      <GithubCorner />
      <Container>
        <div className='main-header'>
          <h1 className='main-title'>Let's sort it!</h1>
        </div>
        <Dashboard />
      </Container>
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById('root'));
