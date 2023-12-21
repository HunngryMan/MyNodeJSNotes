function saludar (nombre){
    return `Hola ${nombre}`;
}

function saludarAlMundo() {
    return '¡Hola Mundo!';
}

// module.exports.saludar = saludar
// module.exports.saludarAlMundo = saludarAlMundo

module.exports = {
    saludar: saludar,
    saludarAlMundo: saludarAlMundo
};