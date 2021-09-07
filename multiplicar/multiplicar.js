//REQUIERES
const fs = require('fs');   //libreria propia de node File System
// const fs = require('express');  librerias externas a node
// const fs = require('./fs');  librerias llamadas de algun lado de nuestro proyecto
var colors = require('colors');

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject("la base no es un numero");
            return; //para parar el codigo
        }
        let contenido = "";
        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base * i}\n`
            //\n//salto de linea
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err) {
                reject(err)
            }   
            resolve(`tabla-${base}.txt`)
        });
    })
}

let listarTabla=(base, limite)=>{
    console.log(`==========TABLA DE ${base}================`.green);
    for (let i = 1; i < limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green)
    }
    
}

//EXPORTAMOS EL METODO PARA SER REQUERIDO DE MANERA GLOBAL
module.exports={
    crearArchivo,
    listarTabla
}


