import React from 'react';
import { render } from 'react-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import yt from './assets/yt.png';
const App = () => {
  return (
    <section className='main-section'>
      <div className='container'>
        {/* <header> */}
          {/* <img className='logo' src={yt} /> */}
          <h1 className='main-title'>Let's sort it!</h1>
        {/* </header> */}
        <Dashboard />
        {/* <Login /> */}
      </div>
    </section>
  );
};

render(<App />, document.getElementById('root'));
