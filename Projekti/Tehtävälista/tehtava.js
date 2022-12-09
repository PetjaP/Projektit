/* Lomakkeen painikkeen haku, ja "klikkauksen" kuuntelu*/
var enterButton = document.getElementById("nappi");
enterButton.addEventListener("click",lisaaNapauttaessa); // lisaaNapauttaessa = funktio, jota kutsutaan //

/* Lomakkeen syöttöalueen haku, ja "enterin" kuuntelu */
var input = document.getElementById("lisaa");
input.addEventListener("keypress", lisaaEnterilla); // lisaaEnterilla = funktio, jota kutsutaan //

/* Lomakkeen tyhjän listan haku, johon tehtävät syötetään */
var ul = document.querySelector("ul");

/* Funktio joka kertoo syötetyn merkkijonon pituuden */
function inputLength()
{
	return input.value.length;
}

/* Lisäysfunktio */
function luoLista()
{
	var li = document.createElement("li"); // Tällä luodaan <li> //
  // Tarkistus, että on syötetty dataa itse lisäysalueelle //
  if(input.value != '')
  {
    li.appendChild(document.createTextNode(input.value)); //Tämä lisää li-elementtiin tekstin //
  	ul.appendChild(li); // Tämä lisää li-elementin ul-elementtiin
  	input.value = ""; // Syöttökentän tyhjennys
  }

// Tehdyn tehtävän muuttaminen väriltään "valmiiksi"
function crossOut() {
		li.classList.toggle("done");
	}
  // Tällä kutsutaan ylläoleva funktio //
	li.addEventListener("click",crossOut);

// Poistonapin lisääminen
var poisto = document.createElement("nappula"); // Painikkeen luonti //
	poisto.appendChild(document.createTextNode("X")); // Luodaan painikkeeseen X-kirjain //
	li.appendChild(poisto); // Tällä lisätään se kaikkiin elementteihin
	poisto.addEventListener("click", poistaTehtava);


// Poistofunktion lisäys //
function poistaTehtava()
  {
		li.classList.add("delete")
	}
}
//Pääfunktion lopetus //

// Funktio, kun lisätään klikkaamalla
function lisaaNapauttaessa()
{
	if (inputLength() > 0) { //Tarkistetaan, että on lisätty jotain. //
		luoLista(); // Pääfunktion kutsuminen //
	}
}
// Funktio jos lisätään Entterillä //
function lisaaEnterilla(event)
{
	if (inputLength() > 0 && event.keyCode ===13) { /* Tarkistetaan että Enter on painettu
                                                    "13" on Enterin numerokoodi ts. "keyCode" */
		luoLista(); // Pääfunktion kutsuminen
	}
}
