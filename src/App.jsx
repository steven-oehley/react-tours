import Loader from "./components/Loader";
import Tours from "./components/Tours";
import useFetchTours from "./hooks/useFetchTours";

const App = () => {
  const { isLoading, tours, setTours, error, refetch } = useFetchTours();

  const handleRemove = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const handleReload = () => {
    refetch();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <h2 className="text-6xl text-secondary text-center m-4">Tours</h2>
      <Tours tours={tours} onRemove={handleRemove} onReload={handleReload} />
    </main>
  );
};
export default App;
