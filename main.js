/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/

let pocetKalorii = 0;
let vysledek = document.querySelector('#vysledek');
let snezeno = document.querySelector('#snezeno');

const obrazky = document.querySelectorAll('.ovoce');

obrazky.forEach((obrazek) => {
	obrazek.addEventListener('click', (udalost) => {
        pocetKalorii += parseInt(udalost.target.dataset.kalorie); 
        vysledek.innerHTML = 'Počet kalorií celkem: ' + pocetKalorii;
	});
});




