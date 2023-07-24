import { JSX } from 'react';

import Calculator from './components/Calculator';
import Comparing from './components/Comparing';
import './style.css';

function App(): JSX.Element {
  return (
    <div className="mainContainer">
      <Calculator />
      <Comparing />
    </div>
  );
}

export default App;
