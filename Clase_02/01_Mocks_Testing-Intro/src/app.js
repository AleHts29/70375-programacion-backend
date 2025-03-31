import express from 'express';
import config from './config/config.js';
import suma from './suma.js'

// import dotenv from 'dotenv'
// dotenv.config()

import usersRouter from './routes/users.router.js'

const app = express();
const SERVER_PORT = config.port




console.log(config);


app.get('/ping', (req, res) => {
    res.send('pong');
});


app.use("/api/users", usersRouter);






app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`);

    console.log(process.argv.slice(2));


    /* =====================================
    =               Test                  =
    ===================================== */
    let testPasados = 0
    const testTotales = 4

    //Test 1: La función debe devolver null si algun parametro no es numérico.
    testPasados = escenario1(testPasados)

    //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
    testPasados = escenario2(testPasados)

    //Test 3: La función debe poder realizar la suma correctamente.
    testPasados = escenario3(testPasados)

    //Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros.
    testPasados = escenario4(testPasados)



    console.log(`Test a ejecutar: ${testTotales}, pasaron: ${testPasados}`);
});



const escenario1 = (testPasados) => {
    console.log("Test 1: La función debe devolver null si algun parametro no es numérico.");

    // Given
    const numero1 = "2"
    const numero2 = 2


    // Then 
    let result = suma(numero1, numero2)



    // Assert o Validacion
    if (result === null) {
        console.log('Test 1: Passed\n');
        testPasados++
    } else console.error(`Test 1: No paso, se recibio ${typeof result}, pero se esperaba un valor null`);


    return testPasados;
}


const escenario2 = (testPasados) => {
    console.log("Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro.");

    // Given


    // Then 
    let result = suma()



    // Assert o Validacion
    if (result === 0) {
        console.log('Test 2: Passed\n');
        testPasados++
    } else console.error(`Test 2: No paso, se recibio ${result}, pero se esperaba 0`);


    return testPasados;
}


const escenario3 = (testPasados) => {
    console.log("Test 3: La función debe poder realizar la suma correctamente..");

    // Given
    const numero1 = 2
    const numero2 = 2


    // Then 
    let result = suma(numero1, numero2)
    console.log(result);



    // Assert o Validacion
    const expect = numero1 + numero2
    if (result == expect) {
        console.log('Test 3: Passed\n');
        testPasados++
    } else console.error(`Test 3: No paso, se recibio ${result}, pero se esperaba: ${expect}`);


    return testPasados;
}


const escenario4 = (testPasados) => {
    console.log("Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros.");

    // Given
    const numerosDeEntrada = [1, 2, 3, 4, 5]


    // Then 
    let result = suma(...numerosDeEntrada)
    console.log(result);



    // Assert o Validacion
    const expect = 15
    if (result == expect) {
        console.log('Test 4: Passed\n');
        testPasados++
    } else console.error(`Test 4: No paso, se recibio ${result}, pero se esperaba: ${expect}`);


    return testPasados;
}