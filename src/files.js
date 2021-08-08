const fs = require('fs');

/* -------------------------------------------------------------------------- */
/*                             MANEJO DE ARCHIVOS JS                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------- CREACION -------------------------------- 

fs.writeFileSync('./Archivos/archivoSync.txt', 'ARCHIVO CREADO');

try {
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    fs.writeFileSync('./Archivos/fyh.txt', 
    `Fecha: ${fecha} Hora: ${hora}`)
    const fyh = fs.readFileSync('./Archivos/fyh.txt', 'utf-8');
    console.log(fyh);    
} catch (error) {
    throw new Error(`Error en escritura: ${error.message}`);
}

fs.writeFile('./Archivos/archivoAsync.txt', 'ARCHIVO ASINCRONICO', (error)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log("Archivo creado");
    }
});*/

/* --------------------------------- LECTURA -------------------------------- 

fs.readFile('./Archivos/archivoAsync.txt','utf-8', (err, data)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(data)
    }
})*/

/* --------------------------- AGREGADO + LECTURA --------------------------- 

fs.appendFile('./Archivos/archivoAsync.txt', 'TEXTO AGREGADO', (err)=>{
    if(err){
        console.log(err.message)
    }else{
        fs.readFile('./Archivos/archivoAsync.txt', 'utf-8', (err,data)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log(data)
            }
        })
    }
})


fs.readFile('../package.json', 'utf-8', (err,data)=>{
    if(err){
        throw new Error (`Error en la lectura del archivo ${err.message}`)
    }else{
        const info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data),
            size: data.length,
        }
        console.log(info);
        fs.writeFile('../info.txt', JSON.stringify(info, null, 2), err=>{
            if(err){
                throw new Error (`Error en la escritura del archivo "${err.message}"`)
            }else{
                console.log("Archivo escrito");
            }
        })
    }
})*/

/* ------------------------------- ASYNC AWAIT ------------------------------ 

async function leerInfo(){
    try{
    let info = JSON.parse(await fs.promises.readFile('../info.txt', 'utf-8'))
    console.log(info);
    info.contenidoObj.author = 'Coderhouse'
    console.log(info.contenidoObj);
    await fs.promises.writeFile('../package.json.coder', )
    }
    catch(err){
        console.log('Error leyendo: ' + err.message)
    }
}

leerInfo();
*/


class Contenedor {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo;

    }
    async save(obj){
        try{
            let info = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf-8'));
            info.push(obj);
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(info, null, 2));
        }
        catch(err){
            console.log('Error leyendo: ', err.message)
        }
    }
    getById(){

    }
    async getAll(){
        try{
            let arr = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf-8'));
            return arr;
        }
        catch(err){
            console.log('Error leyendo: ', err.message)
        }
    }
    deleteById(){

    }
    async deleteAll(){
        try{
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(null, null, 2));
        }
        catch(err){
            console.log('Error leyendo: ', err.message)
        }
    }
}
const objeto = {
    nombre: "nicolas",
    apellido: "senra",
    edad: 26
}
const archivo = new Contenedor ("../productos.txt");
console.log(archivo.save(objeto))
