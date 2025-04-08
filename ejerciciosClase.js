const readline = require('readline-sync');



// Ejercicio 1: Sumar elementos de un array
// Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.
function sumarElementos() {  
    let array = readline.question(console.log("============ Ejercicio 1: Sumar elementos ==============\n Ingrese los números separados por comas(,):")).split(',').map(Number);
    let suma = array.reduce((acc, num) => acc + num, 0);
    console.log(`La suma de los elementos ingresados es: ${suma}`);
}

// Ejercicio 2: Número mayor y menor
// Crea una función que reciba un array de números y retorne el mayor y el menor.
function mayorYMenor() {
    let array = readline.question(console.log("============ Ejercicio 2: Número Mayor y Menor ==============\n Ingrese los números separados por comas(,):")).split(',').map(Number);
    let mayor = Math.max(...array);
    let menor = Math.min(...array);
    console.log(`El número Mayor es: ${mayor} y el número Menor es: ${menor}`);
}

// Ejercicio 3: Contar elementos pares
// Dado un array de números, cuenta cuántos son pares y devuelve el total.
function contarPares() {
    let array = readline.question(console.log("============ Ejercicio 3: Contar elementos pares ==============\n Ingrese los números separados por comas(,):").split(',').map(Number));
    let pares = array.filter(num => num % 2 === 0).length;
    console.log(`Cantidad de números pares: ${pares}`);
}

// Ejercicio 4: Ordenar un array sin usar .sort()
// Implementa un algoritmo que ordene un array de números de menor a mayor sin usar .sort().
function ordenarArray() {
    let array = readline.question(console.log("============ Ejercicio 4: Ordenar un array ==============\n Ingrese los números separados por comas(,):")).split(',').map(Number);
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(`Array ordenado: ${array}`);
}

// Ejercicio 5: Buscar un elemento
// Dado un array de nombres, busca si un nombre específico está en la lista y devuelve su posición.
function buscarElemento() {
    let array = readline.question("============ Ejercicio 5: Buscar un elemento ==============\n Ingrese los nombres separados por comas(,):").split(',');
    let nombre = readline.question("Ingrese el nombre a buscar:");
    let index = array.indexOf(nombre);
    console.log(`Posición de ${nombre} en el array: ${index}`);
}

// Ejercicio 6: Revertir un array sin usar .reverse()
// Implementa una función que invierta el orden de un array sin usar .reverse().
function revertirArray() {
    let array = readline.question("============ Ejercicio 6: Revertir un array sin usar .reverse() ==============\n Ingrese los números separados por comas(,):").split(',').map(Number);
    let nuevoArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        nuevoArr.push(array[i]);
    }
    console.log(`Array invertido: ${nuevoArr}`);
}

// Ejercicio 7: Convertir nombres a mayúsculas
// Dado un array de nombres, usa map() para convertirlos todos a mayúsculas.
function convertirMayusculas() {
    let array = readline.question("============ Ejercicio 7: Convertir nombres a mayúsculas ==============\n Ingrese los nombres separados por comas(,):").split(',');
    let mayusculas = array.map(nombre => nombre.toUpperCase());
    console.log(`Nombres en mayúsculas: ${mayusculas}`);
}

// Ejercicio 8: Sumar solo los números positivos
// Filtra los negativos y suma los positivos.
function sumarPositivos() {
    let array = readline.question("============ Ejercicio 8: Sumar solo los números positivos ==============\n Ingrese los números separados por comas(,), pueden ser negativos o positivos:").split(',').map(Number);
    let suma = array.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
    console.log(`Suma de números positivos: ${suma}`);
}

// Ejercicio 9: Obtener el primer múltiplo de 5
// Usa find() para hallar el primer número múltiplo de 5 en un array.
function primerMultiploDe5() {
    let array = readline.question("============ Ejercicio 9: Obtener el primer múltiplo de 5 ==============\n Ingrese los números separados por comas(,):").split(',').map(Number);
    let multiplo = array.find(num => num % 5 === 0);
    console.log(`El primer múltiplo de 5 es: ${multiplo}`);
}

// Ejercicio 10: Tabla de multiplicar
// Pide al usuario un número y usa un for para imprimir su tabla de multiplicar del 1 al 10.
function tablaMultiplicar() {
    let num = parseInt(readline.question("============ Ejercicio 10: Tabla de multiplicar ==============\n Ingrese el número para la tabla de multiplicar:"));
    console.log(`============ Tabla de multiplicar del ${num} ==============`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

// Ejercicio 11: Generar una secuencia de Fibonacci
// Usa un for para generar los primeros 10 números de la serie de Fibonacci e imprímelos.
function fibonacci() {
    let a = 0, b = 1;
    console.log("============ Ejercicio 11: Secuencia de Fibonacci ==============");
    for (let i = 0; i < 10; i++) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
}

// Ejercicio 12: Adivinar un número
// Genera un número aleatorio del 1 al 10 y usa un while para pedir al usuario que lo adivine hasta que lo haga correctamente.Ç

function adivinarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let intento;
    console.log("============ Ejercicio 12: Adivinar un numero ==============");
    while (intento !== numeroAleatorio) {
        intento = parseInt(readline.question('Adivina el número (entre 1 y 10):'), 10);
        if (intento !== numeroAleatorio) {
            console.log('Intenta de nuevo');
        }
    }
    console.log('¡Adivinaste el número!');
}

// Ejercicio 13: Contar regresivamente desde un número
// Usa while para imprimir una cuenta regresiva desde un número ingresado por el usuario hasta 0.

function cuentaRegresiva() {
    let numero = parseInt(readline.question("============ Ejercicio 13: Contar regresivamente ==============\n Ingrese un numero:"));
 
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

// Ejercicio 14: Validar entrada de usuario
// Pide al usuario que ingrese un número mayor que 0. Si ingresa un número inválido, vuelve a pedirlo usando do while.
function validarEntrada() {
    let numero;
    console.log("============ Ejercicio 14: Validar entrada ==============");
    do {
        numero = parseInt(readline.question('Ingresa un número mayor que 0:'), 10);
    } while (numero <= 0 || isNaN(numero));
    console.log(`El número ingresado es: ${numero}`);
}

// Ejercicio 15: Mostrar menú hasta que el usuario salga
// Muestra un menú con opciones y usa do while para repetir hasta que el usuario elija salir
function mostrarMenu() {
    let opcion;
    console.log("============ Ejercicio 15: Mostrar menú ==============");
    do {
        opcion = readline.question(`Elige una opción:\n1. Opción 1\n2. Opción 2\n3. Salir`);
        switch (opcion) {
            case '1':
                console.log('Seleccionaste Opción 1');
                break;
            case '2':
                console.log('Seleccionaste Opción 2');
                break;
            case '3':
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida');
        }
    } while (opcion !== '3');
}

// Ejercicio 16: Sumar solo los números impares entre 1 y 50
/* Usa for para recorrer los números del 1 al 50.
   Usa if para sumar solo los impares.
   Usa while para verificar si la suma supera 500 y, si es así, detener el proceso. */

function sumarImpares() {
    let suma = 0;
    let arrayimpares = []
    console.log("============ Ejercicio 16: Sumar solo los números impares entre 1 y 50 ==============");
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            suma += i;
            arrayimpares.push(i)
        }
        if (suma > 500) {
            break;
        }
    }
    console.log(`Los numero impares del 1 al 50 son : ${arrayimpares}`);
    console.log(`Suma de los impares: ${suma}`);
}

// Ejercicio 17: Contador de intentos
//Simula un intento de login.
//Usa while para permitir 3 intentos.

function intentoLogin() {
    let intentos = 3;
    let usuario = 'usser1';
    let contrasena = '1234';
    console.log("============ Ejercicio 17: Contador de intentos Login ==============");
    
    while (intentos > 0) {
        let intentoUsuario = readline.question('Usuario:');
        let intentoContrasena = readline.question('Contraseña:');
        
        if (intentoUsuario === usuario && intentoContrasena === contrasena) {
            console.log('Login exitoso');
            break;
        } else {
            intentos--;
            console.log(`Intentos restantes: ${intentos}`);
        }
    }

    if (intentos === 0) {
        console.log('Se agotaron los intentos espere 10 segundos para volver a intentarlo');
    }
}

// Ejercicio 18: Sumar hasta que el usuario ingrese 0
// Pide números al usuario y usa while para sumarlos hasta que ingrese 0.
function sumarHastaCero() {
    let suma = 0;
    console.log("============ Ejercicio 18: Sumar hasta que el usuario ingrese 0 ==============");
    let numero;
    do {
        numero = parseInt(readline.question('Ingresa un número:'), 10);
        suma += numero;
    } while (numero !== 0);
    console.log(`La suma es: ${suma}`);
}

// Ejercicio 19: Imprimir la serie de Fibonacci hasta que un número supere 100
// Usa while para generar la serie de Fibonacci hasta que un número supere 100.
function fibonacciHasta100() {
    let a = 0, b = 1;
    console.log("============ Ejercicio 19: Fibonacci hasta que un número supere 100 ==============");
    while (a <= 100) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
}

// Ejercicio 20: Imprimir los múltiplos de 3 hasta 50
// Usa while para imprimir los múltiplos de 3 menores a 50.
function imprimirMultiplosDe3() {
    let i = 3;
    console.log("============ Ejercicio 20: Múltiplos de 3 hasta 50 ==============");
    while (i < 50) {
        console.log(i);
        i += 3;
    }
}
function menuEjercicios() {
    let opcion;
    do {
        console.log("Elige un ejercicio para probar:");
        console.log("dar enter antes de escribir");
        console.log("1. Sumar elementos de un array");
        console.log("2. Número mayor y menor");
        console.log("3. Contar elementos pares");
        console.log("4. Ordenar un array sin usar .sort()");
        console.log("5. Buscar un elemento");
        console.log("6. Revertir un array sin usar .reverse()");
        console.log("7. Convertir nombres a mayúsculas");
        console.log("8. Sumar solo los números positivos");
        console.log("9. Obtener el primer múltiplo de 5");
        console.log("10. Tabla de multiplicar");
        console.log("11. Generar una secuencia de Fibonacci");
        console.log("12. Adivinar un número");
        console.log("13. Contar regresivamente desde un número");
        console.log("14. Validar entrada de usuario");
        console.log("15. Mostrar menú hasta que el usuario salga");
        console.log("16. Sumar solo los números impares entre 1 y 50");
        console.log("17. Contador de intentos");
        console.log("18. Sumar hasta que el usuario ingrese 0");
        console.log("19. Imprimir la serie de Fibonacci hasta que un número supere 100");
        console.log("20. Imprimir los múltiplos de 3 hasta 50");
        console.log("21. Salir");

        opcion = readline.question("Ingresa tu opcion: ");

        switch (opcion) {
            case '1': sumarElementos(); break;
            case '2': mayorYMenor(); break;
            case '3': contarPares(); break;
            case '4': ordenarArray(); break;
            case '5': buscarElemento(); break;
            case '6': revertirArray(); break;
            case '7': convertirMayusculas(); break;
            case '8': sumarPositivos(); break;
            case '9': primerMultiploDe5(); break;
            case '10': tablaMultiplicar(); break;
            case '11': fibonacci(); break;
            case '12': adivinarNumero(); break;
            case '13': cuentaRegresiva(); break;
            case '14': validarEntrada(); break;
            case '15': mostrarMenu(); break;
            case '16': sumarImpares(); break;
            case '17': intentoLogin(); break;
            case '18': sumarHastaCero(); break;
            case '19': fibonacciHasta100(); break;
            case '20': imprimirMultiplosDe3(); break;
            case '21': console.log("¡Hasta luego!"); break;
            default: console.log("Opción no válida");
        }
     
    } while (opcion !== '21');
}

menuEjercicios();
