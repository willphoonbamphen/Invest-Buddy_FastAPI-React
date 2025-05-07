import React from 'react';
import './App.css';
import FruitList from './components/FruitList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>รายงานจัดอันดับหุ้นตลาดหลักทรัพย์แห่งประเทศไทย [SET/MAI]</h1>
      </header>
      <main>
        <FruitList />
      </main>
    </div>
  );
};

export default App;