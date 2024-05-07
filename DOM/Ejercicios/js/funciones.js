console.log("Si funciona esta wea");

/* Primeros ejercicios: Solo devuelven cadenas de texto */
function saludar(){
    console.log("Hola, Soy primer función")
}

saludar();
saludar();
saludar();
saludar();


function saludo(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);

}
saludo();
saludo();
saludo();
saludo();

/* Ejercicio u operación */
/* let num1 = parseInt(prompt("Ingrese el primer número:"))
let num2 = parseInt(prompt("Ingrese el segundo número:"))
function suma(){
   let res = num1 + num2;
   console.log(res);
} */
/*  suma();
 */

function bienvenido(){
    console.log("Bienvenido túúúú")
}
 bienvenido();

 function bienvenido(){
    console.log("Bienvenido túúúú")

    return "Hola care bola"
 };
 bienvenido();
const bienve = bienvenido();
console.log(bienve);

/* Funcion con parametros */
/* Los parametros es lo que hay dentro de los () de la function */
function suma (numero1, numero2){
    return numero1 + numero2
}

const sum = suma(3, 5);
console.log(sum);
const sum2 = suma(10, 5);
console.log(sum2);
const sum3 = suma(-9, 5);
console.log(sum3);

/* Crear una function "Saludar" pero que pase como parametro el nombre */

function saludar2(nom){
    return nom
}

const sal = saludar2("Hola don José B)");
console.log(sal)

/* Funciones anónimas */
const variable = function saludar3() {
 console.log("No entendí para que sirve xd")  
 return "Ya entendí xd"
}
variable();
const ayno = variable();
console.log(ayno)
    
const saludito = function nombre(nombre){
    return nombre
}
const var2 = saludito("Juan Perez xd");
console.log(var2);

/* funciones flechas */
const saludito2 = (nombre) => {
    return nombre
}
const var3 = saludito("Función flechas");
console.log(var3)

/* Crear una función que diga si un número es primo o no */
let num = parseInt(prompt("Ingrese un número"))
const primo = function numeropri(){
    for(var5 = 1; var5 < num; var5++){ 
        if (num / var5 == 0) {
            return console.log("El número ingresado no es primo")
        }else {
             return console.log("El número ingresado es primo")
        }
        }
    }

const var4= primo();
console.log(var4)

/* Imprimir la tabla de multiplicar del número dado */
function tablaMultiplicar(numeroTabla){
    for (let i = 1; i <= 10; i++){
        const resultado = `${numeroTabla} x ${i} = ${numeroTabla * i}`;
        console.log(resultado);
    }
}
tablaMultiplicar(5);