import { useState, useCallback } from "react";

export const useHttp = () => { 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequests = useCallback(async (httpConfig, callback) => {
    setIsLoading(true);
    setError(false);

    try { 
      const response = await fetch(httpConfig.URL, {
        method: httpConfig.method ? httpConfig.method : "GET",
        headers: httpConfig.headers ? httpConfig.headers : {},
        body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
      });
      const data = await response.json();
      callback(data);
      setError(false);
    } catch (error) { 
      setError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequests,
  };
};
