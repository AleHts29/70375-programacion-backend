export const generateUserErrorInfo = (user) => {
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
        Lista de propiedades requeridas:
            -> fist_name: type String, recibido: ${user.first_name}
            -> email: type String, recibido: ${user.email}
    `;
};


// mensaje en ingles o otro idima
export const generateUserErrorInfoENG = (user) => {
    return `One or more properties were incomplete or invalid.
        List of required properties:
            -> first_name: type String, received: ${user.first_name}
            -> email: type String, received: ${user.email}
    `;
};