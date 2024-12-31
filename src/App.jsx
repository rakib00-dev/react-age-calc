import { useState } from 'react';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  // let calcInputYear = currentDate.getFullYear() - inputYear;
  // let calcInputMonth = currentDate.getMonth() + 1 - inputMonth;
  // let calcInputDay = currentDate.getDate() - inputDay;

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
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  let currentDate = new Date();
  const [inputValue, setInputValue] = useState(
    `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`
  );
  const [inputYear, setInputYear] = useState();
  const [inputMonth, setInputMonth] = useState();
  const [inputDay, setInputDay] = useState();

  // let inputDay = 2;
  // let inputMonth = 4;
  // let inputYear = 2012;

  let currentDay = currentDate.getDate();
  let currentMonth = 1 + currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear(inputYear)) {
    month[1] = 29; // Update February inputDay to 29 if it's a leap year
  }

  let monthDaysSum = 0;
  month.forEach((e) => {
    monthDaysSum += e;
  });
  console.log(monthDaysSum);

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
  console.log('Your Age is ' + y + ' years ' + m + ' month ' + d + ' day');

  function takeInputValue(e) {
    setInputValue(e.target.value);
  }

  function clickFuntion() {
    console.log('ok');
    setInputYear(() => inputValue.split('-')[0]);
    setInputMonth(() => inputValue.split('-')[1]);
    setInputDay(() => inputValue.split('-')[2]);
    console.log({ inputYear, inputMonth, inputDay });
  }

  let finalDaysOfTotalYear = y * monthDaysSum;

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
        <Card
          title={''}
          value={'Your Age is ' + y + ' years ' + m + ' month ' + d + ' day'}
        />
        <h2 className="text-xl font-bold mb-6 text-center p-4 md:text-3xl">
          Your Age In:
        </h2>
        {/* ////inputs\\\\ */}

        {/* Year card */}
        <Card title={'year:'} value={isNaN(y) ? '' : y} />

        {/* Month card */}
        <Card title={'Month:'} value={isNaN(y) ? '' : y * 12 + m} />

        {/* Days card */}
        <Card title={'Days:'} value={isNaN(y) ? '' : finalDaysOfTotalYear} />

        {/* Hours card */}
        <Card
          title={'Hours:'}
          value={isNaN(y) ? '' : finalDaysOfTotalYear * 24}
        />

        {/* Minutes card */}
        <Card
          title={'Minutes:'}
          value={isNaN(y) ? '' : finalDaysOfTotalYear * 24 * 60}
        />

        {/* Seconds card */}
        <Card
          title={'Seconds:'}
          value={isNaN(y) ? '' : finalDaysOfTotalYear * 24 * 60 * 60}
        />

        {/* deciseconds card */}
        <Card
          title={'deciseconds:'}
          value={isNaN(y) ? '' : finalDaysOfTotalYear * 24 * 60 * 60 * 10}
        />

        {/* centiseconds card */}
        <Card
          title={'centiseconds:'}
          value={isNaN(y) ? '' : finalDaysOfTotalYear * 24 * 60 * 60 * 100}
        />

        {/* milliseconds card */}
        <Card
          title={'milliseconds:'}
          value={isNaN(y) ? '' : finalDaysOfTotalYear * 24 * 60 * 60 * 100}
        />
      </div>
    </div>
  );
}

export default App;
