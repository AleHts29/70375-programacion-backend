import { Command } from 'commander';


// Creamos la instacia
const program = new Command();

// Configuramos Commander
program
    .option('-d', "Variable de debug", false)
    .option('-p <port>', 'puerto del server', 8080)
    .option('--mode <mode>', 'Modo de trabajo', 'development')
program.parse(); // Cerramos las configuraciones 


console.log("Options: ", program.opts());

console.log("Mode Options: ", program.opts().mode);
console.log("Remaining arguments: ", program.args);




/* =====================================
=               Process                =
===================================== */

// 2do - Listeners

process.on('exit', code => {
    console.log(`Process exited with code ${code}`);
})


process.on('uncaughtException', exception => {
    console.log("Esta exception no fue capturada, o controlada.");
    console.error(`Uncaught Exception: ${exception.message}`);
})


process.on('message', message => {
    console.log(`Recibí un mensaje: ${message}`);
})






export default program;