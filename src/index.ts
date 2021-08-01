import { rejects } from "assert/strict"
import { resolve } from "path/posix";

/*
type funcionSinVariables = () => void;

const fun:funcionSinVariables =() => {
    console.log('HOLA');
}

fun();

type funcionConVariables =(param1:string, param2:number)=>number;

const fun2:funcionConVariables = (param1:string, param2:number)=>{
    console.log(`${param1} tiene ${param2} años de edad`);
    return param2;
}

console.log(fun2('nico',26));

type funcionNumero = (num1:number, num2:number)=> number

const promedio:funcionNumero = (number1:number, number2:number)=>{
    const resultado = (number1+number2)/2;
    return resultado;
}

console.log(promedio(2,4));

const prom = (n1:number, n2:number)=>{
    return ((n1+n2)/2);
}

console.log(prom(6,12));

const nombreCompleto = (nombre:string, apellido:string)=>{
    return `${nombre} ${apellido}`
}

const datos = (nombre:any, edad:number)=>{
    return `La edad de ${nombre} es ${edad}`
}

console.log(datos(nombreCompleto('nico','senra'),26));

const suma = (a:number,b:number)=>a+b;

const resta = (a:number,b:number)=>a-b;

const multiplicacion = (a:number,b:number)=>a*b;

const division = (a:number,b:number)=>a/b;

const operacion =(n1:number,n2:number,op:any)=>(op(n1,n2));

console.log(operacion(2,3,suma));

console.log(operacion(2,3,resta));

console.log(operacion(2,3,multiplicacion));

console.log(operacion(2,3,division));

const dividir = (dividendo:number, divisor:number)=>{
    return new Promise((resolve, reject) => {
        if(divisor===0){
            reject('No se puede dividir por cero')
        }else resolve(dividendo/divisor)
    })
};

dividir(10,2)
    .then((resultado)=>console.log(`Resultado promesa es: ${resultado}`))
    .catch((error)=>console.log(error))

dividir(10,0)
    .then((resultado)=>console.log(resultado))
    .catch((error)=>console.log(error))

*/
