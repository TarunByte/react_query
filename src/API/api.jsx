import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch the data
export const fetchposts = async () => {
  const res = await api.get("/posts");
  return res.status === 200 ? res.data : [];
};
