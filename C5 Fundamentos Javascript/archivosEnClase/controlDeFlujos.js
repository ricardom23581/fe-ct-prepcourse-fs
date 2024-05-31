function viajar (destino) {
    if (destino ==='Brasil') {
        console.log('Gire a la IZQUIERDA');
    }else if (destino === 'Argentina') {
        console.log('Gire a la DERECHA');
    }else{
        console.log('Nos PERDIMOS');
    }
}

viajar('Argentina');

function manejar (edad) {
    if (edad >= 18) {
        console.log('True');
    }else{
        console.log('false');
    }

}

manejar(17.99);