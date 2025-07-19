import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((res) => setData(res.meals))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetch;


// // src/hooks/useFetch.js
// const useFetch = () => {
//   const fetchData = async (url, setMeals, setLoading, setError) => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(url, { signal });
//       if (!res.ok) throw new Error("Network response was not ok");
//       const json = await res.json();
//       setMeals(json.meals);
//     } catch (err) {
//       if (err.name !== "AbortError") {
//         setError(err.message);
//       }
//     } finally {
//       setLoading(false);
//     }

//     return () => controller.abort(); // in case you want to manually abort later
//   };

//   return { fetchData };
// };

// export default useFetch;