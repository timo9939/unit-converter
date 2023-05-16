
// console.log('The tempInput2 is',tempInput2)
// console.log('The tempInput is',typeof(tempInput2),"type")
// console.log('tempInput is ',typeof(tempInput))

document.getElementById("convert").onclick=function convertUnit(){
let tempUnit=document.getElementById("celsius").checked;
let resultTemp;
let tempInput=document.getElementById("user-input").value;
let tempInput2=parseInt(tempInput);

    
    console.log("The tempInput2 is ",tempInput2)
    
    console.log(typeof(tempInput2))
   switch (tempUnit){
    case true:
       
        resultTemp=(tempInput2-32)*5/9
        document.getElementById("result").innerHTML=resultTemp
    console.log(resultTemp," °C")
        break;
        
    case false:
        resultTemp=((tempInput2 * 1.8+32))
        document.getElementById("result").innerHTML=resultTemp
        console.log(resultTemp,"F")
        break;
} 
} 
