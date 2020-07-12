import React, { useState } from 'react';
import Header from '../header';
import Form from '../form';
import Result from '../result';
import './app.css';

const App = () => {
  const [keyMaps, setKeyMaps] = useState([{}]);

  return (
    <div className="app">
      <Header />

      <Form
        keyMaps={keyMaps}
        setKeyMaps={setKeyMaps}
      />

      <Result
        keyMaps={keyMaps}
      />
    </div>
  );
};

export default App;
