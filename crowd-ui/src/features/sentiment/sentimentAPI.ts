import axios from "axios";

export const fetchUsers = async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/albums");
  return resp;
};
