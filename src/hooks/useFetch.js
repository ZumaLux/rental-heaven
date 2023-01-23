import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();

    fetch(url, { signal: abortFetch.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data from the resource!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setIsPending(false);
        setError(err.message);
      });
    console.log("fetch");
    return () => abortFetch.abort();
  }, [url]);

  return { data, setData, isPending, error };
};

export default useFetch;
