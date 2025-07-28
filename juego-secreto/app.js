
function asignarTexto(elemento, texto){
    let x = document.querySelector(elemento);
    x.innerHTML = texto;
}

// variables
let numeroSecreto = 0;
let numeroMaximno = (Math.floor(Math.random()*6)) + 5; // [5 - 10]
console.log(numeroMaximno);
let entrada = document.getElementById('entrada'); 
let botonIntento = document.getElementById('btn');
let botonNuevoJuego = document.getElementById('btnNuevoJuego');
let numerosSecretos = [];
let intentos = 0;


// generar numero secreto
function generarNumeroSecreto(){
    if (numerosSecretos.length == numeroMaximno){        
        asignarTexto('p', "Ya sorteaste todos los numeros posibles, has terminado el juego");
        botonIntento.disabled = true;
        botonNuevoJuego.disabled = true;
        return;
    }
    let x = parseInt(Math.floor(Math.random() * numeroMaximno) + 1);
    if (numerosSecretos.includes(x)){
        generarNumeroSecreto();
    }else{
        numeroSecreto = x;        
        numerosSecretos.push(x);
        return x;
    }
    return x;
}

// validar si el numero indica es nuestro numero secreto
function check(){
    let valorEntrada = parseInt(entrada.value);        
    intentos++;
    if (valorEntrada > numeroSecreto){
        limpiarCaja();
        asignarTexto('p','El numero secreto es menor');
    }else if (valorEntrada == numeroSecreto){
        asignarTexto('p',`Acerto en el intento numero ${intentos} `);             
        botonNuevoJuego.disabled = false;
        botonIntento.disabled = true;        
    }else{
        limpiarCaja();
        asignarTexto('p','El numero secreto es mayor');
    }
    return; 
}


function limpiarCaja(){        
    entrada.value = '';
}


// reiniciar la configuracion del juego
function nuevoJuego(){
    botonNuevoJuego.disabled = true;
    botonIntento.disabled = false;
    confiInicial();
}


function confiInicial(){
    asignarTexto('h1', "Juego del numero secreto");
    asignarTexto('p', `Indica un numero entre 1 y ${numeroMaximno}`);    
    limpiarCaja();
    generarNumeroSecreto();
    intentos = 0;        
}

confiInicial();