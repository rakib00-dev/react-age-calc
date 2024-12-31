const Card = ({ title, value }) => {
  return (
    <div className="card bg-base-100 w-96 border border-t-1 border-black/10 shadow-xl m-5">
      <div className="card-body flex flex-row">
        <h2 className="card-title">{title}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Card;
