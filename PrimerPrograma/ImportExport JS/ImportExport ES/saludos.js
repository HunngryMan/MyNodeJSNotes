function saludar (nombre){
    return `Hola ${nombre}`;
}

function saludarAlMundo() {
    return '¡Hola Mundo!';
}

// module.exports.saludar = saludar
// module.exports.saludarAlMundo = saludarAlMundo

export const saludar = saludar;
export const saludarAlMundo = saludarAlMundo;
// NOT WORKING !