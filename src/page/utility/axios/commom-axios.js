import axios from "axios"

const  getCall = (url,config)=>{
   return axios.get(url,config);
}
const  postCall = (url,config)=>{
    return axios.post(url,config);
 }
export{getCall,postCall};