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
        this.id=0;
    }
    async save(obj){
        try{
            let info = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf-8'))
            console.log(info)
        }
        catch(err){
            console.log('Error leyendo: ', err.message)
        }
    }
    getById(){

    }
    getAll(){

    }
    deleteById(){

    }
    deleteAll(){

    }

}
const archivo = new Contenedor ("../info.txt")
