const Input = ({ onchange, inputValue }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
      <div>
        <label htmlFor="year">Pick Month/Day/Year from here: </label>
      </div>
      <div className="flex flex-row">
        <input
          id="year"
          type="date"
          step="1"
          value={inputValue}
          onChange={onchange}
          className="border rounded-r-sm text-center w-fit p-2 bg-transparent border-black rounded-xl"
        />
        <button
          id="btn"
          type="button"
          className="btn border border-black rounded-r-2xl"
          // onClick={onchange}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Input;
