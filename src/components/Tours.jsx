import Tour from "./Tour";

const Tours = ({ tours, onRemove, onReload }) => {
  return (
    <section
      className="mx-auto gap-4 ring-2 ring-accent max-w-7xl p-4 rounded-md grid grid-cols-1 md:grid-cols-3
 "
    >
      {tours.length === 0 && (
        <div className="text-center text-3xl text-secondary mx-auto w-1/2">
          No Tours Left
          <button className="btn btn-primary" onClick={onReload}>
            Reload Tours
          </button>
        </div>
      )}
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};
export default Tours;
