import React, { useState } from 'react';
import Counter from '../components/Counter';
import ListView from '../components/ListView';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  const [prevList, setPrevList] = useState([]);
  const [isAsc, setIsAsc] = useState(false);

  const handleAdd = () => {
    if (counter > 0 && !list.includes(counter)) {
      const updated = [...list, counter];
      const sorted = isAsc
        ? updated.sort((a, b) => a - b)
        : updated.sort((a, b) => b - a);
      setList(sorted);
      setCounter(0);
    }
  };

  const handleSort = () => {
    const sorted = [...list].sort((a, b) =>
      isAsc ? b - a : a - b
    );
    setList(sorted);
    setIsAsc(!isAsc);
  };

  const handleReset = () => {
    setPrevList(list);  
    setList([]);        
  };

  const handleUndo = () => {
    if (prevList.length > 0) {
      setList(prevList);   
      setPrevList([]);     
    }
  };

  const handleDelete = (value) => {
    const updated = list.filter((item) => item !== value);
    setList(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-200 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Counter & List App</h1>

      <Counter
        counter={counter}
        setCounter={setCounter}
        handleAdd={handleAdd}
      />

      <ListView
        list={list}
        isAsc={isAsc}
        handleSort={handleSort}
        handleReset={handleReset}
        handleUndo={handleUndo}
        handleDelete={handleDelete}
        canUndo={prevList.length > 0}
      />
    </div>
  );
};

export default App;
