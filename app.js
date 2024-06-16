const express = require("express"); 
const app = express();
function allData(data) {
    app.get(data,(request , response)=>{
        console.log(request.query);
        response.send( {code : 1 , msg : "成功" , total : data.length , values : data} )
    })
}
allData('https://zyxcl.xyz/exam_api/zh')
allData('https://zyxcl.xyz/exam_api/xl')
allData('https://zyxcl.xyz/exam_api/sx')
    