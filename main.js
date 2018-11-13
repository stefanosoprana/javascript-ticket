// Variabili

var age = prompt('quanti anni hai?')
var chilometri = prompt('quanti chilometri devi percorrere?')

// prezzo per persone tra i 18 e 65 anni

var prezzo_pieno = chilometri * 0.21;

// prezzo scontato del 20% per gli under 18

var sconto_del_20 = ((chilometri * 0.21 )* 20) / 100;
var prezzo_scontato_del_20 = prezzo_pieno - sconto_del_20;

// prezzo scontato del 40% per gli over 65

var sconto_del_40 = ((chilometri * 0.21 )* 40) / 100;
var prezzo_scontato_del_40 = prezzo_pieno - sconto_del_40;

// funzione

if (age < 18)
{
  document.getElementById('prezzo-20%').innerHTML = prezzo_scontato_del_20 + '€  scontato del 20%';
}
else if (age > 65)
{
  document.getElementById('prezzo-40%').innerHTML = prezzo_scontato_del_40 + '€  scontato del 40%';
}
else
{
  document.getElementById('prezzo').innerHTML = prezzo_pieno + '€';
}
