import { useState } from "react";

const Tour = ({ id, image, info, name, price, onRemove }) => {
  const [display, setDisplay] = useState(false);
  const partialInfo = info.slice(0, 100) + "...";

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl ring-2 ring-accent mx-auto">
      <figure className="relative h-60 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full" />
        <div className="badge badge-secondary absolute top-2 right-2 p-2">
          R{price}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {!display ? (
          <p>
            {partialInfo}{" "}
            <span
              className="text-secondary cursor-pointer block mb-2"
              onClick={toggleDisplay}
            >
              {" "}
              Read More
            </span>
          </p>
        ) : (
          <p>
            {info}{" "}
            <span
              className="text-secondary cursor-pointer block mb-2"
              onClick={toggleDisplay}
            >
              {" "}
              Close Info
            </span>
          </p>
        )}

        <button
          className="btn btn-block btn-primary btn-outline"
          onClick={() => onRemove(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};
export default Tour;
