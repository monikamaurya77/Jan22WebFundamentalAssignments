function Add() {
    var input1 = document.getElementById("no1").value;
    var input2 = document.getElementById("no2").value;
    if(isNaN(input1,input2)){
        document.getElementById('h1').innerHTML=(`Sorry, please enter number☹️'${input1}' and '${input2}'`);
    }
    else {
        let data1 = parseInt(input1)
        let data2 = parseInt(input2)
        let sum = data1 + data2
        document.getElementById('h1').innerHTML=sum;
    }
    
}