const fs = require('fs');
/*
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
});

fs.readFile('./Archivos/archivoAsync.txt','utf-8', (err, data)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(data)
    }
})

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
*/

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
})
