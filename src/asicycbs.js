/*const funcion2 = () => {
    console.log('Soy un callback')
}

const funcion1 = (funct) => {
    funct();
}

funcion1(funcion2);
funcion1(()=>console.log("Soy otro callback"));
function funcion3 (mensaje) {
    console.log(mensaje)
}

// const funcion3 = (mensaje) => {console.log(mensaje)}
setTimeout(function(){funcion3('vitecomoe')}, 1000);

const fin = () => console.log('Terminé');
const mostrarLetras = (palabra,fin)=>{
    let i = 0;
    const timer = setInterval(() => {
        if(i<palabra.length){
            console.log(palabra[i]);
            i++;   
        }else{
            clearInterval(timer);   
            fin();
        }
    }, 100);
}
mostrarLetras('¡HOLA!', fin);
*/

const fin = () => console.log('Terminé');
const mostrarLetras = (palabra,fin)=>{
    let i = 0;
    const timer = setInterval(() => {
        if(i<palabra.length){
            console.log(palabra[i]);
            i++;   
        }else{
            clearInterval(timer);   
            fin();
        }
    }, 100);
}
mostrarLetras('¡HOLA!', fin);

