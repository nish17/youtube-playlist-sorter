import React from 'react';
import { render } from 'react-dom';
// import Login from './Login';
import Dashboard from './Dashboard';
const App = () => {
  return (
    <section className='main-section'>
      <div className='container'>
        <div className='main-header'>
          <h1 className='main-title'>Let's sort it!</h1>
        </div>
        <Dashboard />
        {/* <Login /> */}
      </div>
    </section>
  );
};

render(<App />, document.getElementById('root'));
