import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Form from './Form';
import FunctionalComponent from './FunctionalComponent';
import Header from './Header';
import DemoClass from './ClassComponent'

ReactDOM.render(
  <div>
  <Form/>
  <FunctionalComponent/>
  <Header/>
  <DemoClass/>
  </div>,
  document.getElementById('root')
  );

  reportWebVitals();
