const kmDaPercorrere = prompt ("Quanti km devi percorrere ?");

const etàCliente = prompt ("Quanti anni hai ?");


let prezzoBiglietto = (kmDaPercorrere * 0.21);

if (etàCliente < 18){
  prezzoBiglietto = (prezzoBiglietto - prezzoBiglietto * 0.2)
}

if (etàCliente > 65){
  prezzoBiglietto = (prezzoBiglietto - prezzoBiglietto * 0.4)
}

let bigliettoP = `
  ${prezzoBiglietto}
`

document.getElementById ("biglietto").innerHTML =  bigliettoP 







