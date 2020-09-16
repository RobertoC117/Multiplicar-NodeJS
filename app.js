/**
 * BASES
 */
//Para acceder a la propiedad
 const {argv} = require('./yargs')
 const colors = require('colors');

 const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')

 //let argv2 = process.argv;
 //console.log(argv2)
 //  let param = argv[2]
 //  let base = param.split('=')[1]


 console.log(argv)
 let command = argv._[0]

 switch (command) {
    case 'listar':
       listarTabla(argv.base, argv.limite)
       break;
    case 'crear':
       crearArchivo(argv.base, argv.limite)
              .then(name => console.log(name))
              .catch(err => console.log(err))
       break;
    default:
       console.log('No existe exte comando')
       break;
 }


