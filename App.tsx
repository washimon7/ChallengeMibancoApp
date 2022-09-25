import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { MainNavigation } from './src/navigation/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
