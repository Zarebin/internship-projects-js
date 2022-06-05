
  
import axios from "axios";
import request from "../../helper/requestConfig";

export const  fetchfoodCompare=async()=> {

  const resp=await axios.get("https://jsonplaceholder.typicode.com/photos");
  const question1 = resp.data[Math.floor(Math.random()*resp.data.length)];
  const question2 = resp.data[Math.floor(Math.random()*resp.data.length)];
  // console.log("from API", resp);
  const respons = {question1, question2};
  console.log("from API", question1,question2);

  return respons;
}

// import axios from "axios";
// import request from "../../helper/requestConfig";

// export const fetchUsers = async () => {
//   const resp = await axios.get("https://jsonplaceholder.typicode.com/albums");
//   // const randomResp = resp.data[Math.floor(Math.random() * resp.data.length)];
//   const randomFirstInput = resp.data[Math.floor(Math.random()*resp.data.length)];
//   const randomSecondInput = resp.data[Math.floor(Math.random()*resp.data.length)];
//   const respons = {randomFirstInput, randomSecondInput};
//   // const outPut = { random: randomResp, status: resp.status };
//   const outPut = { random: respons, status: resp.status };
//   //console.log("get response", outPut);
//   return outPut;
// };

// export const PostUserData = async (data, userId) => {
//   return await request.post("/user.json", { ...data, userId });
// };

// import axios from "axios";


// export const fetchUsers = async () => {
//   const resp = await axios.get("https://jsonplaceholder.typicode.com/albums");
//   const randomData = resp.data[Math.floor(Math.random() * resp.data.length)];
//   const outPut = { data: randomData, status: resp.status };
//   return outPut;
// };

export const postUserData = async (data: any, userId: any) => {
  return await request.post("/user.json", { ...data, userId });
};