const numeroComputer = Math.floor(Math.random() * 6) + 1;
const numeroGiocatore= prompt("Inserisci un numero del 1 al 6")

console.log(numeroComputer);
console.log(numeroGiocatore);

if (numeroComputer == numeroGiocatore){
    alert("Bravo, hai vinto")
}
else{
    alert("Siamo spiacenti, la fortuna non è con te oggi :(")
}
