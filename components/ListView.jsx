import React from 'react';

const ListView = ({
  list,
  isAsc,
  handleSort,
  handleReset,
  handleUndo,
  handleDelete,
  canUndo
}) => {
  return (
    <div className="bg-white p-6 rounded shadow w-80 border border-gray-200 mt-4">
      <h2 className="text-lg font-semibold text-center mb-4 border-b pb-2">
        List View
      </h2>

      {list.length === 0 ? (
        <p className="text-gray-400 text-sm text-center mb-4">
          No numbers added yet.
        </p>
      ) : (
        <ul className="space-y-2 mb-4">
          {list.map((num, index) => (
            <li
              //key={index}
              className="flex justify-between items-center bg-gray-300 px-3 py-2 rounded"
            >
              <span>
                {num}{' '}
                <span className="text-gray-400 text-xs">
                  #{index + 1}
                </span>
              </span>
              <button
                onClick={() => handleDelete(num)}
                className="text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between items-center text-xs text-blue-600">
        <span>Total numbers: {list.length}</span>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="border border-red-300 text-red-500 px-2 py-1 rounded"
          >
            Reset
          </button>
          {canUndo && (
            <button
              onClick={handleUndo}
              className="border border-green-300 text-green-600 px-2 py-1 rounded"
            >
              Undo
            </button>
          )}
          <button
            onClick={handleSort}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Sort {isAsc ? '↓' : '↑'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListView;
