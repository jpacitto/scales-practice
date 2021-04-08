import './App.css';

import { useState } from 'react';

import ScalesList from './components/ScalesList';
import MainPageWrapper from './components/MainPageWrapper';

function App() {

  const [selectedScale, setSelectedScale] = useState('Major');

  const selectScaleAction = (scale) => {
    setSelectedScale(scale);
  }

  return (
    <div className="App">
      <ScalesList setSelectedScale={selectScaleAction} selectedScale={selectedScale}/>
      <MainPageWrapper selectedScale={selectedScale}/>
    </div>
  );
}

export default App;
