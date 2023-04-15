import React from 'react';

import ComponentOne from './ts-basics/ComponentOne';
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.app}>
      <ComponentOne />
    </div>
  );
}

export default App;
