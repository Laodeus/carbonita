import React from 'react';
import Navigator from './src/navigator/Navigator';
import { AppProvider } from './src/storage/storage';

const App = () => {

  return (
    <AppProvider>
      <Navigator />
    </AppProvider>
  );
}

export default App;
