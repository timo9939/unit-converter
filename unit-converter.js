let tempUnit=document.getElementById("celsius").checked
let resultTemp
let tempInput=document.getElementById("user-input").value;
let tempInput2=parseInt(tempInput);


document.getElementById("convert").onclick=function (tempInput2,tempUnit){
    console.log("The tempInput2 is ",tempInput2)
   switch (tempUnit){
    case true:
       
        resultTemp=(tempInput2-32)*5/9
        document.getElementById("result").innerHTML=resultTemp
    console.log(resultTemp," °C")
        break;
        
    case false:
        console.log("F")
        break;
} 
} 
