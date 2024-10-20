import { useEffect, useState, useCallback } from "react";

const useFetchTours = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  const fetchTours = useCallback(async () => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://www.course-api.com/react-tours-project",
        {
          signal: controller.signal,
        }
      );

      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      setTours(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }

    // Cleanup function in case of component unmount
    return () => controller.abort();
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  return { isLoading, tours, error, setTours, refetch: fetchTours };
};

export default useFetchTours;
