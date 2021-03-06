import React, { useState, useEffect } from 'react';

import TreeComponent from '../TreeComponent/TreeComponent'

import { requestData } from '../../utils/requestData'

import './App.scss';


const App = () => {
  const [valueInput, setValueInput] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  return (
    <div>
      <div className="mainBlock">
        <h2>Построить дерево по данным</h2>
        <input 
          value={valueInput} 
          placeholder="Введите ссылку на JSON файл"
          onChange={({ target }) => {
            setValueInput(target.value);
            setError(false);
          }}
        />
        <button onClick={() => requestData(valueInput).then(data => Array.isArray(data) ? setData(data) : setError(true))}>
          Построить дерево
        </button>
        {error && <div>неверный запрос</div>}
      </div>

      {!!data.length && <TreeComponent data={data}/>}
    </div>
  );
}

export default App;