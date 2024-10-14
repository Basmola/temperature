let button1=document.getElementById("btn");
let button2=document.getElementById("btn-reset");
let input=document.getElementById("input");
let output=document.querySelector(".output");
button1.onclick = () =>{
    let inputValue = input.value;
    if (isNaN(inputValue) || inputValue === ""){
        output.innerHTML = "Enter a valid temperature";
    }
    else{
        let outputValue=inputValue * ( 9 / 5 ) +32 ;
        if(Number.isInteger(outputValue)){
        output.innerHTML=`The Tempreture in Fahrenheit:${outputValue} °F`;}
        else{
            outputValue=(inputValue * ( 9 / 5 ) +32 ).toFixed(3);
            output.innerHTML=`The Tempreture in Fahrenheit:${outputValue} °F`;}}
        
    };
button2.onclick = () =>{
output.innerHTML="";
}
