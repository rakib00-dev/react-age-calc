import { useState } from 'react';
import Input from './components/Input';

function App() {
  // let calcYears = currentDate.getFullYear() - years;
  // let calcMonths = currentDate.getMonth() + 1 - months;
  // let calcDays = currentDate.getDate() - days;

  // let mL = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];

  let currentDate = new Date();
  const [inputValue, setInputValue] = useState(
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`
  );
  const [years, setYears] = useState();
  const [months, setMonths] = useState();
  const [days, setDays] = useState();

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  let inputDay = 2;
  let inputMonth = 4;
  let inputYear = 2012;

  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = 1 + date.getMonth();
  let currentYear = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear(inputYear)) {
    month[1] = 29; // Update February days to 29 if it's a leap year
  }

  if (inputDay > currentDay) {
    currentDay = currentDay + month[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (inputMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let d = currentDay - inputDay;
  let m = currentMonth - inputMonth;
  let y = currentYear - inputYear;

  // document.getElementById('age').innerHTML =
  console.log('Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days');

  function takeInputValue(e) {
    setInputValue(e.target.value);
  }

  function clickFuntion() {
    console.log('ok');
    setYears(() => inputValue.split('-')[0]);
    setMonths(() => inputValue.split('-')[1]);
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
            <p> </p>
          </div>
        </div>

        {/* months card */}
        <div className="card bg-base-100 w-96 border border-t-1 border-black/10 shadow-xl m-5">
          <div className="card-body flex flex-row">
            <h2 className="card-title">Months:</h2>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
