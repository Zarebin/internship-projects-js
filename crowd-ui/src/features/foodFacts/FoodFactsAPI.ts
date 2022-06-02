import axios from "axios";
import request from "../helper/requestConfig";

export const  GetDataInformation=async()=> {

  const resp=await axios.get("https://jsonplaceholder.typicode.com/photos")
  const singleResp=resp.data[Math.floor(Math.random() * resp.data.length)]
  const outPut = { random: singleResp, status: resp.status };
  return outPut;
  

}
export const PostDataInformation = async (data:any, userId:any) => {
  return await request.post("/user.json", { ...data, userId });
};







