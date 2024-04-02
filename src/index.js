// 1. Import Area

import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';


const root = ReactDOM.createRoot(document.querySelector('.container-fluid'));
root.render(
  <>
  <header>Header</header>
  <main>
    <div className='container h-100 a_cont'>Main</div>
  </main>
  <footer>Footer</footer>
  </>
);
