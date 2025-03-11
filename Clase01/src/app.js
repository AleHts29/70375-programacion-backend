import express from 'express';
import handlebars from 'express-handlebars';
import program from './process.js'
import config from './config/config.js';
import viewsRouter from './routes/views.router.js';

import __dirname from './utils.js';

// import dotenv from 'dotenv'
// dotenv.config()



const app = express();
const SERVER_PORT = config.port


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));



console.log(config);


app.get('/ping', (req, res) => {
    res.send('pong');
});



app.use("/", viewsRouter);




app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`);

    console.log(process.argv.slice(2));




    // 2do - Listeners
    // const errorCodeServer = 5
    // process.exit(errorCodeServer)


    // console("HOLA");



    // console.log("Llamando lista de numeros:");
    // listNumbers(1, 2, 3, "aaa", true);

});



// Ejeplo lista de numeros
const listNumbers = (...numbers) => {
    let invalidData = false;
    let dataTypes = new Array();
    console.log("Datos entrantes");

    numbers.forEach(element => {
        console.log(element);
        if (typeof element !== 'number') {
            invalidData = true;
        }

        dataTypes.push(typeof element);
    })


    if (invalidData) {
        console.error("Algun dato no es un número");
        process.exit(-4);
    }
}