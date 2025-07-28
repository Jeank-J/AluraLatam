let numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log(numeroSecreto);
numeroSecreto = 1;
let numeroUser = 1;
let cont = 0;
do{
    cont++;
    numeroUser = parseInt(prompt("Digitar un numero entre 1 y 100"));
    if (numeroUser < 0 || numeroUser > 100){
        alert(`El numero ${numeroUser} no esta en el rango [1,100]`);
        continue;   
    }
    if (numeroSecreto < numeroUser) alert("El numero secreto es menor");
    else if (numeroSecreto > numeroUser) alert("El numero secreto es mayor");
}while(numeroSecreto != numeroUser);

alert(`Felicitaciones, adivinaste el numero secreto en ${cont} ${ cont > 1 ? " veces":" vez"}`);