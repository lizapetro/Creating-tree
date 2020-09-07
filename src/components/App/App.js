import React, { useState, useEffect } from 'react';

import TreeComponent from '../TreeComponent/TreeComponent'

import { requestData } from '../../utils/requestData'


const App = () => {
  const [valueInput, setValueInput] = useState('https://rcslabs.ru/locations.json');
  const [data, setData] = useState([]);
  useEffect(() => {
    requestData(valueInput).then(data => setData(data));
  }, [])
  return (
    <div>
      <input 
        value={valueInput} 
        onChange={({ target }) => setValueInput(target.value)}
      />
      <TreeComponent data={data}/>
    </div>
  );
}

export default App;