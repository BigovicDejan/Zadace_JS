function razbij(e) {
  e.preventDefault();

  let recenica = document.getElementById("textarea").value;
  let brojRijeci = recenica.split(' ').filter((rijec) => rijec !== ' ').length;
  let znakovi = recenica.split('').filter((znak) => znak !== ' ').length;
 
  console.log(recenica);
  console.log(brojRijeci);
  console.log(znakovi);

document.getElementById("detalji").innerHTML = `Tvoja recenica je: <b><i>${recenica}</i></b> <br> Broj riječi u rečenici je: <b>${brojRijeci}</b> <br> Broj znakova ne uključujući razmake je: <b>${znakovi}</b>`;
}