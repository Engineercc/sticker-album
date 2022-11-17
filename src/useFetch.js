import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://62a09ed2202ceef708725454.mockapi.io/users";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getEmployees = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getEmployees();
  }, []);
  return { loading, data };
};
