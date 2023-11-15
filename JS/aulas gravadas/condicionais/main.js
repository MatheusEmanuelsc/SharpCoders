let num =8

if (num>7) {
    
    console.log("E Maior")
} else if(num>=5) {
    
    console.log("E Medio")
}else{

    console.log("E Baixo")
}


// Operador ternario 


let result = num>=7? "E maior": "E medio";

console.log(result)

switch (num) {
    case 10:
        
        console.log("Perfeito")
        break;

    default:
        
        console.log("Tente Dnv")
        break;
}