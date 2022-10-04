function tarkistus(form) {
  //Tarkista etunimi
  var enimi = form.nimi.value;
  if (enimi.length < 2) {
    alert("Et antanut nimeäsi!");
    form.enimi.focus();
    return false;
  }
  //Tarkista salasanan pituus
  var salas = form.salasana.value;
  if (salas.length < 2) {
    alert("Et antanut salasanaa tai salasana on liian lyhyt!");
    form.salas.focus();
    return false;
  }
  //Tarkista onko salasanat samat
  var salas2 = form.usalasana.value;
  if (salas != salas2) {
    alert("Salasanat eivät täsmää, anna sama salasana!");
    form.salas.focus();
    return false;
  }
  //Tarkistetaan Radionamiskat
  var pallero = form.fiilis;
  var namiska = false;
  for (var i = 0; i < pallero.length; i++) {
    if (pallero[i].checked == true) {
      namiska = true;
    }
  }
  if (namiska == false) {
    alert("Et valinnut fiilistä, valitse se!");
    return false;
  }
  //Tarkistetaan Tekstilomake
  var tekstialue = form.yhteys.value;
  if (tekstialue.length < 20) {
    alert("Kirjoita huolesi vähintään 20 merkillä!");
    form.tekstialue.focus();
    return false;
  }

  //Tarkistetaan checkboxit
  var boxi = form.boksi;
  var check = false;
  for (var k = 0; k < boxi.length; k++) {
    if (boxi[k].checked == true) {
      check = true;
    }
  }
  if (check == false) {
    alert("Et valinnut mitä teet viikonloppuisin, valitse se!");
    return false;
  } else {
    alert("Kiitos lomakkeen täytöstä!");
  }
}

function tyhjenna(form) {
  var tyhja = form.value;
  if(!confirm("Haluatko varmasti tyhjentää lomakkeen?")) {
    return false;
  }
}
