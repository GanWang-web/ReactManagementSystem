import axios from 'axios'

export default function ajax(url="", params={}, type="GET") {
  let promises;
  return new Promise((resolve,reject)=>{
    if("GET" === type.toUpperCase()){
      let paramsStr = "";
      Object.keys(params).forEach(key => {
        paramsStr += key + '=' + params[key] + '&'
      });
      if(paramsStr !== ""){
        paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf("&"));
      }
      url += "?" + paramsStr;
      promises = axios.get(url);
    } else if ('POST' === type.toUpperCase()){
      promises = axios.post(url, params);
    }
    promises.then((response)=>{
      resolve(response.data);
    }).catch(err=>{
      reject(err);
    })
  })
}
