import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';

function App() {
  let [values,setValue] = useState('text');

  return (
    <div className="App">
        <ClassCounter/>
    </div>
  );
}

export default App;
