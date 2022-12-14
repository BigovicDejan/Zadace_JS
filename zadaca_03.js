let randomNumber = Math.floor(Math.random() * 100);
let pokusaj = document.getElementById("broj");
let brojPokusaja = 0;

function provjeriBroj(event){
  event.preventDefault();
  
brojac.innerHTML = `<p>Broj pokušaja: ${brojPokusaja+=1}</p>`;

if(pokusaj.value == randomNumber){
  rezultat.innerHTML = `<p>Čestitam traženi broj ${randomNumber} točno ste pogodili!!</p>`;
}
else if(pokusaj.value < randomNumber && pokusaj.value <= 100 && pokusaj.value > 0){
  rezultat.innerHTML = `<p>Vaš broj je manji od traženog broja. Pokušajte ponovo.</p>`;
}
else if(pokusaj.value > randomNumber && pokusaj.value <= 100 && pokusaj.value > 0){
  rezultat.innerHTML = `<p>Vaš broj je veći od traženog broja. Pokušajte ponovo.</p>`;
}
else{
  rezultat.innerHTML = `<p>Vaš broj nije u zadanom rasponu</p>`;
}

}

