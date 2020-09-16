/**
 * Multiplicar
 */
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) =>{

    if(isNaN(base))
        return console.log('La base no es un numero')

    console.log('============================='.cyan)
    console.log(`===== TABLA DEL ${base} =====`.cyan)
    console.log('============================='.cyan)
    for(let i = 1; i <= limite; i++)
    {
        console.log(`\t${base} * ${i} = ${base*i}`.yellow)
    }
    console.log('============================='.cyan)
    console.log('============================='.cyan)
}

let crearArchivo = (base, limite = 10) =>{
    return new Promise((resolve, reject) =>{

        if(!Number(base))
        {
            reject('El valor introducido no es un numero')
            return
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data +=`${base} * ${i} = ${base*i} \r`
        }

        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`,  data, (err) => {
        if (err) 
            reject(err);
        else
            resolve(`Se creó tablas/tabla-${base} al ${limite}.txt`.green)
        //console.log(`The file tabla-${base}.txt has been saved!`);
        });
    })
}
 
//EXPORTAR
module.exports = {
    crearArchivo,
    listarTabla
}



