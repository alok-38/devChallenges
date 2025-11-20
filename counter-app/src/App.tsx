import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Vite + React
      </h1>
      <section className="text-center">
        <p className='text-lg mb-4'>
          You Clicked <span className='font-bold text-blue-600'>{count}</span> times!
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <button
            className="
      bg-blue-500 hover:bg-blue-600 active:bg-blue-700
      text-white font-bold py-4 px-12 rounded-xl
      shadow-lg hover:shadow-xl
      transition-all duration-200
      transform hover:scale-105 active:scale-95
    "
            onClick={() => setCount(count + 1)}
          >
            Count Up
          </button>

          <button
            className="
      bg-red-500 hover:bg-red-600 active:bg-red-700
      text-white font-bold py-4 px-12 rounded-xl
      shadow-lg hover:shadow-xl
      transition-all duration-200
      transform hover:scale-105 active:scale-95
    "
            onClick={() => setCount(count - 1)}
          >
            Count Down
          </button>

          <button
            className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600
             text-white font-bold py-4 px-12 rounded-xl shadow-lg
             transition-all duration-200 transform
             hover:scale-105 active:scale-95"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;