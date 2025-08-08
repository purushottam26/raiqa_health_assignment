import React from 'react';

const Counter = ({ counter, setCounter, handleAdd }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6 w-80 text-center">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      <div className="flex items-center justify-center gap-4 mb-4">
        <button 
          onClick={() => setCounter(prev => {
            if(prev > 0 ){
               return prev - 1;
            }
            else{
              return prev = 0;
            }
          })} 
          className="w-8 h-8 rounded-full border"
        >-</button>
        <span className="text-2xl font-bold">{counter}</span>
        <button 
          onClick={() => setCounter(prev => prev + 1)} 
          className="w-8 h-8 rounded-full border"
        >+</button>
      </div>
      <button 
        onClick={handleAdd}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >Add to List</button>
    </div>
  );
};

export default Counter;
