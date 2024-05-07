console.log("si funciona esta wea")

/* Ejercicio 1: Escribe una función que tome dos números como parámetros y devuelva
su suma */

function sumaNumeros(num1, num2){
    return(num1 + num2);
}
console.log(sumaNumeros(7, 8))

/* Ejercicio 2: Escribe una función que determine si un número dado es primo */

// hacer esto

/* Ejercicio 3: Escribe una función que calcule el promedio de números dados */

function imprimirPares(limite) {
    for (let i = 2; i <= limite; i += 2){
      console.log(i);
    }
  }
  imprimirPares(10);

/* Ejercicio 4: Escribe una función que imprima todos los números pares hasta un límite
dado */

function imprimirPares(limite){
  if (limite <= 0){
    return;
  }
  for (let i = 2; i <= limite; i += 2){
    console.log(i);
  }
}
imprimirPares(10);

/* Ejercicio 5: Escribe una función que imprima la tabla de multiplicar de un número
  dado */

function tablaMultiplicar(numeroTabla){
    for (let i = 1; i <= 10; i++){
        const resultado = `${numeroTabla} x ${i} = ${numeroTabla * i}`;
        console.log(resultado);
    }
}
tablaMultiplicar(5);

/* Ejercicio 6: Crea una función llamada numeroMayor() que toma tres números como
entrada y retornar el número mayor de ellos, si son iguales devolver un
String «son iguales» */

function numeroMayor(numero1, numero2, numero3){
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number' || typeof numero3 !== 'number'){
    }
    let mayor = numero1;
    if (numero2 > mayor){
      mayor = numero2;
    }
    if (numero3 > mayor){
      mayor = numero3;
    }
    if (numero1 === mayor && numero2 === mayor && numero3 === mayor){
      return "Son iguales";
    }
    return mayor;
}
console.log(numeroMayor(10, 20, 30));

  /* Ejercicio 7: Crea una función llamada generar_caracteres() que tome como
  parámetro un número entero (n) y un carácter, retornar el carácter
  multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar
  «xxxxx» */

function generarCaracteres(n, caracter){
    if (typeof n !== 'number' || typeof caracter !== 'string' || caracter.length !== 1){
    }
    let resultado = '';
    for (let i = 0; i < n; i++){
      resultado += caracter;
    }
    return resultado;
}
console.log(generarCaracteres(5, 'x'));

/* Ejercicio 8: Sumar los números del 1 al 10 utilizando un bucle */

function sumarNumeros(limite){
    if (limite <= 0){
    }
    let suma = 0;
    for (let i = 1; i <= limite; i++){
      suma += i;
    }
    return suma;
}
console.log(sumarNumeros(10));

/* Ejercicio 9: Pedir al usuario que ingrese un número mayor que 100 utilizando un
bucle */

function pedirNumero(){
    let numero;
    do {
      numero = parseFloat(prompt("Ingrese un número mayor que 100: "));
      if (isNaN(numero)){
        alert("Debe ingresar un número.");
      } else if (numero <= 100) {
        alert("El número debe ser mayor que 100.");
      }
    } while (isNaN(numero) || numero <= 100);
    return numero;
  }
  let numeroIngresado = pedirNumero();
  console.log("El número ingresado es:", numeroIngresado);

/* Ejercicio 10: Generar un número aleatorio entre 1 y 10 hasta que se obtenga un 7 */

function numeroAleatorio(){
    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      console.log("Número generado:", numeroAleatorio);
    } while (numeroAleatorio !== 7);
    return numeroAleatorio;
  }
const numeroObtenido = numeroAleatorio();
console.log("Se ha obtenido el número:", numeroObtenido);

/* Ejercicio 11: Imprimir los números pares del 0 al 20 */

function imprimirPares(limite){
    if (limite <= 0){
      return;
    }
    for (let i = 0; i <= limite; i += 2){
      console.log(i);
    }
  }
  imprimirPares(20);

/* Ejercicio 12: Pedir al usuario que ingrese un número entre 1 y 5 */

function pedirNumero() {
  let numero;
  do {
    numero = parseFloat(prompt("Ingrese un número entre 1 y 5: "));
  } while (isNaN(numero) || numero < 1 || numero > 5);
  return numero;
}
let numeroIngresado2 = pedirNumero();
console.log("El número ingresado es:", numeroIngresado2);

/* Ejercicio 13: Imprimir los primeros 10 números de la serie de Fibonacci */

function imprimirFibonacci(n){
  if (n <= 0 || typeof n !== 'number' || isNaN(n)){
  }
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++){
    console.log(a);
    const siguiente = a + b;
    a = b;
    b = siguiente;
  }
}
imprimirFibonacci(10);

/* Ejercicio 14: Pedir al usuario que ingrese una contraseña y repetir la solicitud hasta
que ingrese una contraseña válida (por ejemplo, "contraseña123") */

function pedirContrasena(){
  let contrasenaIngresada;
  do {
    contrasenaIngresada = prompt("Ingrese la contraseña (12345): ");
  } while (contrasenaIngresada !== "12345");
  console.log("Contraseña correcta!");
}
pedirContrasena();

/* Ejercicio 15: Imprimir los primeros 5 números primos */

// hacer esto

/* Ejercicio 16: Pedir al usuario que ingrese un número positivo utilizando un bucle do-
while y mostrar un mensaje de error si no lo hace */

function pedirNum(){
  let numero;
  do {
    numero = parseFloat(prompt("Ingrese un número positivo: "));
    if (isNaN(numero) || numero <= 0) {
      console.error("Error: ingrese un número positivo.");
    }
  } while (isNaN(numero) || numero <= 0);
  return numero;
}
let numeroIngresado3 = pedirNum();
console.log("Número ingresado:", numeroIngresado3);

/* Ejercicio 17: Imprimir los números del 10 al 1 */

function imprimirNumeros(){
  for (let i = 10; i >= 1; i--){
    console.log(i);
  }
}
imprimirNumeros();

/* Ejercicio 18: Calcular el factorial de un número dado */

function calcularFactorial(numero){
  if (typeof numero !== 'number' || numero < 0 || !Number.isInteger(numero)){
  }
  let factorial = 1;
  for (let i = 1; i <= numero; i++){
    factorial *= i;
  }
  return factorial;
}
console.log(calcularFactorial(5));

/* Ejercicio 19: Imprimir los primeros 5 números primos*/

// hacer esto

/* Ejercicio 20: Imprimir la secuencia de números del 1 al 100, pero para múltiplos de 3
imprimir "Fizz", para múltiplos de 5 imprimir "Buzz" y para múltiplos de
ambos 3 y 5 imprimir "FizzBuzz“ */

function imprimirFizzBuzz(){
  for (let i = 1; i <= 100; i++){
    let resultado = "";
    if (i % 3 === 0) {
      resultado += "Fizz";
    }
    if (i % 5 === 0) {
      resultado += "Buzz";
    }
    if (resultado === ""){
      resultado = i;
    }
    console.log(resultado);
  }
}
imprimirFizzBuzz();

/* Ejercicio 21: Imprimir los números del 10 al 1 en orden descendente */

function numerosDesc(inicio, fin){
  if (typeof inicio !== 'number' || typeof fin !== 'number'){
  }
  if (inicio < fin) {
  }
  for (let i = inicio; i >= fin; i--) {
    console.log(i);
  }
}
numerosDesc(10, 1);

/* Ejercicio 22: Imprimir los primeros 10 términos de la serie de Fibonacci */

function imprimirFibonacci2(n){
  if (n <= 0 || typeof n !== 'number' || isNaN(n)){
  }
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++){
    console.log(a);
    const siguiente = a + b;
    a = b;
    b = siguiente;
  }
}
imprimirFibonacci2(10);

/* Ejercicio 23: */

/* Ejercicio 24: */

/* Ejercicio 25: */

/* Ejercicio 26: */


