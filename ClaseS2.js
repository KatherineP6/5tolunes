// CLASE LUNES (7-8)
//=>{} call bag
/*
const showMessage = (message)=>{
    return message;
  }
  
  
  console.log(showMessage('Hola Como esta'))
  console.log(showMessage('segundo mensaje')) 
  
  
  var a =5;
  if(a%2 ==0){
      console.log("es un numero par")
  }else{
      console.log("es un numero impar")
  }
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
  
  
  //CLASE 2 (14-15)
  /* 
  const http=require('http')
  //const { request } = require('https')
  const server =  http.createServer((request,Response) => {
      Response.end('Hola SARNOSO')
  
  })
  const port=5000
  const host="localhost"
  
  
  server.listen(port,host,()=> {
      console.log(`Servidor ejecutandose en ://${port}:${host}`)
  })
   */

/*const http=require('http')
//const { request } = require('https')
const server =  http.createServer((request,Response) => {
   // Response.end('Hola SARNOSO')
    if(request.url == '/' && request.method =='GET')
        Response.end(JSON.stringify({"message" : "Accediendoa al servidor"}))
    }
)
const port=5000
const host="localhost"


server.listen(port,host,()=> {
    console.log(`Servidor ejecutandose en ://${port}:${host}`)
})*/
