const suma_infrastruture = require('../infrastructure/suma_infrastructure')

function obtenerSumaValores(val1, val2) {
    if (val1 !== null && val2 !== null) {
        return suma_infrastruture.obtenerSumaValores(val1, val2);
    } else {
        return { error: 'No me indico Valores validos.' }
    }
}

module.exports = {
    obtenerSumaValores
}
