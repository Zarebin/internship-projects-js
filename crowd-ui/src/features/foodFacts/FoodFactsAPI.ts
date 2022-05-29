import axios from "axios";



// const apiState={
//     Information: [
//       {id: "1", text: "Does this Lagoon have beef?",src: "../../../assest/image01.jpg", photoGrapher:"travis barclay",userValue:undefined},
//       {id: "2", text: "Does this Sushi Delivery have beef?",src: "../../../assest/image02.jpg", photoGrapher:"InGold We Trust",userValue:undefined},
//       {id: "3", text: "Does this Monte Cristo have beef?",src: "../../../assest/image03.jpg", photoGrapher:"kevin Green",userValue:undefined},
//       {id: "4", text: "Does this Sweet and Sour Pork have peanuts?",src: "../../../assest/image04.jpg", photoGrapher:"Amruta Lolage",userValue:undefined},
//       {id: "5", text: "Does this Mysore have beef?",src: "../../../assest/image05.jpg", photoGrapher:"Taco Bell",userValue:undefined},
//     ],
//     step:0,
    
//   } ;

export const  GetDataInformation=async()=> {
  const resp=await axios.get("https://jsonplaceholder.typicode.com/photos")
  return resp;

}







