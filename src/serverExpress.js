const fs = require('fs');
const express = require('express')
const app = express();
app.get('/', (req, res)=>{
    res.send('<h1 style="color:blue">Bienvenidos a express</h1>')
})
app.get('/vistas', (req, res)=>{
    res.send('La cantidad de visitas es 10')
})
app.get('/fyh', (req, res)=>{
    let date = new Date();
    res.send({fyh:`${date.getDay()}/${date.getMonth()}/${date.getYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`})
})
app.get('/productos', (req, res)=>{
    async function envio(){
        try{
            const arr = JSON.parse(await fs.promises.readFile('./productos.txt', 'utf-8'));
            res.send(arr)            
        }
        catch(err){
            console.log('Error leyendo: ', err.message)
        }
    }
    envio()
    
})
app.get('/productoRandom', (req, res)=>{
    async function envioRandom(){
        try{
            const arr = JSON.parse(await fs.promises.readFile('./productos.txt', 'utf-8'));
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            const min=0;
            const max=arr.length;
            const productoRandom = getRandomInt(min,max)  
            res.send(arr[productoRandom])            
        }
        catch(err){
            console.log('Error leyendo: ', err.message)
        }
    }
    envioRandom()
    
})
const PORT= 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Servidor express corriendo en port ${server.address().port}`)
})

server.on("error", error=> console.log(`Error en servidor ${error}`))
