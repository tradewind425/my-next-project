import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement } from '../store/counterSlice';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="absolute top-0 right-0 m-4 p-4 bg-white rounded-lg shadow-lg">
      {/* text-black クラスを追加して、文字色を黒に設定 */}
      <div className="text-4xl font-bold mb-8 text-black">Count: {count}</div>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
