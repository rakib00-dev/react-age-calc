import { useState } from 'react';
import Input from './components/Input';

function App() {
  let currentDate = new Date();
  const [inputValue, setInputValue] = useState(
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`
  );
  const [years, setYears] = useState();
  const [months, setMonths] = useState();
  const [weeks, setweeks] = useState();
  const [days, setDays] = useState();

  let calcYears = currentDate.getFullYear() - years;
  let calcMonths = currentDate.getMonth() + 1 - months;
  let calcDays = currentDate.getDate() - days;

  let mL = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  function takeInputValue(e) {
    setInputValue(e.target.value);
  }

  function clickFuntion() {
    console.log('ok');
    setYears(() => inputValue.split('-')[0]);
    setMonths(() => inputValue.split('-')[1]);
    console.log(months);

    setDays(() => inputValue.split('-')[2]);
    console.log({ years, months, days });
  }

  return (
    <div className="grid place-content-center mt-10 h-fit w-fit m-auto gap-2 text-xl ">
      <h1 className="text-2xl text-center font-bold mb-6 md:text-4xl">
        Age Calculator
      </h1>
      <Input
        inputValue={inputValue}
        onchange={takeInputValue}
        btnClicked={clickFuntion}
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-6 text-center p-4 md:text-3xl">
          Your Age In:
        </h2>
        {/* ////inputs\\\\ */}

        {/* years card */}
        <div className="card bg-base-100 w-96 border border-t-1 border-black/10 shadow-xl m-5">
          <div className="card-body flex flex-row">
            <h2 className="card-title">Years:</h2>
            <p>{currentDate.getFullYear() - years} </p>
          </div>
        </div>

        {/* months card */}
        <div className="card bg-base-100 w-96 border border-t-1 border-black/10 shadow-xl m-5">
          <div className="card-body flex flex-row">
            <h2 className="card-title">Months:</h2>
            <p>{Math.abs(calcMonths)} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
