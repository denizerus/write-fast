import React, {useContext} from 'react';
import Navbar from './components/Navbar';
import {ThemeContext} from './contexts/ThemeContext';

const App = () => {
  const theme = useContext(ThemeContext).getTheme();
  return (
    <div className={`${theme.app}`} style={{height: '100%'}}>
      <div className={`container pt-1 ${theme.app}`}>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
