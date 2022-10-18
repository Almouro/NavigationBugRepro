import * as React from 'react';
import Navigator from './Navigator';

const App = () => {
  // Importing like this instead fixes the issue
  // const Navigator = require('./Navigator').default;
  return <Navigator />;
};

export default App;
