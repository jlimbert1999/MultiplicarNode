const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log("listar")
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        console.log("crear")
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.red}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log("comnado no reconocido")

}

// let argumento = process.argv  //argv = permite mostrar eltexto ingresado en consola --consola
// // let parametro=argv[2]
// // let base=parametro.split('=')[1]


