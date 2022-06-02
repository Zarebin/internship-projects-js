import axios from "axios";
import request from "../../helper/requestConfig";

export const fetchUsers = async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/albums");
  const randomData = resp.data[Math.floor(Math.random() * resp.data.length)];
  const outPut = { data: randomData, status: resp.status };
  return outPut;
};

export const postUserData = async (data: any, userId: any) => {
  return await request.post("/user.json", { ...data, userId });
};
