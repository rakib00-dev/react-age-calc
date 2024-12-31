import { useState } from 'react';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState(new Date());

  function takeInputValue(e) {
    setInputValue(e.target.value);
    console.log(inputValue.split('-')[0]);
  }

  return (
    <div className="grid place-content-center mt-10 h-fit w-fit m-auto gap-2 text-xl ">
      <h1 className="text-2xl text-center font-bold mb-6 md:text-4xl">
        Age Calculator
      </h1>
      <Input inputValue={inputValue} onchange={takeInputValue} />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-6 text-center p-4 md:text-3xl">
          Your Age In:
        </h2>
        {/* inputs */}
        <div className="card bg-base-100 w-96 border border-t-1 border-black/10 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Years:</h2>
            <p>{}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
