// Enter Prompt
let value = prompt('Enter your num:');

// Converting useful strings to a number
var farenheit = parseFloat(value, 10);

const convertFahrToCelsius = (farenheit) =>{
    if(isNaN(farenheit)){
        console.log(`${value} is not a number but a/an ${typeof(value)}`) 
    }else if((typeof farenheit === "number")  || (typeof farenheit === "string" && typeof parseInt(farenheit) === "number")){
        var Cel = (farenheit -32)*5 / 9
                C = Cel.toFixed(4)
                console.log(C + ' deg C')
    }
    else{
         console.log('Please enter a value')   
    }
}
convertFahrToCelsius(farenheit);




