// Muuttujien määrittely //
var numero = '';
var luku = '';
var taulu = ['+','-','*','/','%'];
var index = 0;
// Yhteenlasku funktion määrittely //
function lisaa(luku)
{
  numero+= luku;
  document.getElementById('tulos').innerHTML = numero;
}
// Prosenttilaskun funktion määrittely //
function laske()
{
  var indeksi, jono;
  if(numero.search("%") > 0)
  {
    jono = numero.split('%');
    numero = jono[0] * jono[1] / 100;
    document.getElementById('tulos').innerHTML = numero;
  }
  else
  {
    document.getElementById('tulos').innerHTML = eval(numero);
    numero = eval(numero);
  }
}
// Tyhjennys funktion määrittely //
function tyhjenna()
{
  numero = '';
  document.getElementById('tulos').innerHTML = numero;
}
// Poistonapin funktion määrittely //
function poistaVika()
{
  for(var i = 0; i < numero.length; i++)
  {
  for(var j = 0; j < taulu.length; j++)
  {
  if(numero[i] == taulu[j])
  {
  index = i;
  }
  }
    }
// Tulos napin määrittely //
  numero = numero.substr(0, index);
  document.getElementById('tulos').innerHTML = numero;
}
