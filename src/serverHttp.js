const http = require('http')

const server = http.createServer((req,res)=>{

    let hoy = new Date();
    let horaActual = hoy.getHours();
    const saludo = (horaActual)=>{
        if(horaActual>=6 &&horaActual<=12){
            res.end('Buenos días!')
        }else if(horaActual>=13 && horaActual<=19){
            res.end('Buenas tardes!')
        }else res.end('Buenas noches!')
    }
    saludo(horaActual)
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`)
})
