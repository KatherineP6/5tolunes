//=>{} call bag
/* const showMessage = (message)=>{
  return message;
}


console.log(showMessage('Hola Como esta'))
console.log(showMessage('segundo mensaje')) */


/* var a =5;
if(a%2 ==0){
    console.log("es un numero par")
}else{
    console.log("es un numero impar")
} */
//recorrer arreglo 

function busquedalineal(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {  
        if (arr[i] === elemento) {        
            return i;  
        }
    }
    return -1;  
}

const arreglo = [10, 2, 3, 8, 4, 9, 7];
const elementobuscado = 10;  
const indice = busquedalineal(arreglo, elementobuscado);
console.log(`El elemento ${elementobuscado} se encuentra en el índice ${indice}`);
