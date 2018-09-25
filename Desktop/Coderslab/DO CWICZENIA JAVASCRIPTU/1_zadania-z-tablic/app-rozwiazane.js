/*przypomnienie
-------------------------
petla for:
-------------------------
for (var i=0; i<10; i++) {
    //i to licznik
    console.log(i);
}



-------------------------
petla po tablicy
-------------------------
var tab = ["ala", "monika", "piotrek"];

for (var i=0; i<tab.length; i++) {
    //i bedzie sie zwiekszac
    //czyli bedziemy mieli
    //tab[0] === "ala"
    //tab[1] === "monika"
    //tab[2] === "piotrek"
    //czyli
    //tab[i] === za każdym przejściem pętli to kolejny element w tablicy
    //czyli wypisze "ala", "monika", "piotrek"
}
*/

/* 1) ----------------------------------------------
Stwórz pustą tablicę
Za pomocą pętli dodaj do niej 10 kolejnych liczb od 0 do 9
Wypisz tablicę w konsoli
---------------------------------------------- */



/* 2) ----------------------------------------------
Stwórz pustą tablicę
Za pomocą pętli dodaj do niej 10 randomowych liczb z przedzialu 1-10
---------------------------------------------- */
var tab = [];
for (var i=0; i<10; i++) {
    tab.push( Math.floor(Math.random()*10) + 1 );
}

/* 3) ----------------------------------------------
Stwórz tablicę z 10 ramdomowymi liczbami z przedziału 1-10.
Wypisz w konsoli liczby większe od 5
---------------------------------------------- */
var tab = [];
for (var i=0; i<10; i++) {
    tab.push( Math.floor(Math.random()*10) + 1 );
}

for (var i=0; i<tab.length; i++) {
    if (tab[i] > 5) {
        console.log(tab[i]);
    }
}

//lub
tab.forEach(function(el) {
    if (el > 5) {
        console.log(el);
    }
})

//lub w ES6
{
    console.log( tab.filter(el => el > 5) )
}

/* 4) ----------------------------------------------
Stwórz tablicę z 10 randomowymi liczbami
Wypisz w konsoli największą liczbę w tablicy
Przemyśl wcześniej jak znaleźć taką liczbę
---------------------------------------------- */
var tab = [];
for (var i=0; i<10; i++) {
    tab.push( Math.floor(Math.random()*10) + 1 );
}

var max = tab[0];
for (var i=1; i<tab.length; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }
}
console.log(tab, 'max: ' + max);

/* 5) ----------------------------------------------
Stwórz 2 proste tablice z 5 elementami (możesz z palca)
Połącz te 2 tablice w jedną NOWĄ tablicę, a następnie w konsoli wypisz nową tablicę oraz jej długość
---------------------------------------------- */
var tab1 = [1,2,3,4,5]
var tab2 = [6,7,8,9,10]

var tab3 = tab1.concat(tab2);
console.log(tab3, tab3.length)

//lub w ES6
{
    const tab3 = [...tab1, ...tab2];
    console.log(tab3, tab3.length)
}

/* 6) ----------------------------------------------
Stwórz 2 tablice z 4 rożnymi słowami każda.
Sprawdź w której tablicy suma liter imion jest większa
Wynik wypisz w konsoli
---------------------------------------------- */
var tab1 = ["marcin", "ania", "piotr", "beata"];
var tab2 = ["ala", "ola", "monika", "patrycja"];

var sum1 = 0;
for (var i=0; i<tab1.length; i++) {
    sum1 += tab1[i].length;
}

var sum2 = 0;
for (var i=0; i<tab2.length; i++) {
    sum2 += tab2[i].length;
}

if (sum1 > sum2) {
    console.log('Ilośc liter jest większa w tablicy 1');
} else if (sum2 > sum1) {
    console.log('Ilośc liter jest większa w tablicy 2');
} else {
    console.log('Ilośc liter jest taka sama w obydwu tablicach');
}


/* 7) ----------------------------------------------
Stwórz tablicę 10 randomowych liczb z przedziału 1-10
Wypisz w konsoli tekst:
"[ liczba1 ][ liczba2 ][ liczba3 ]" i tak dalej
Spróbuj użyć odpowiedniej metody do połączenia elementów tablic w jeden tekst
---------------------------------------------- */
var tab = [];
for (var i=0; i<10; i++) {
    tab.push( Math.floor(Math.random()*10) + 1 );
}

console.log( '[ ' + tab.join(' ][ ') + ' ]')



/* 8) ----------------------------------------------
Stwórz tablicę 5 imion.
Wypisz w konsoli pierwsze i ostatnie imie w tablicy
Za pomocą odpowiednich metod zamień w tablicy:
Pierwsze imię na "Andrzej"
Ostatnie imię zamień na "Zenon"
---------------------------------------------- */
var tab = ["marcin", "ania", "piotr", "beata"];

tab[0] = "Andrzej";
tab[tab.length-1] = "Zenon";

//lub
tab.shift() //wybieram z poczatku
tab.unshift('Angrzej'); //wstawiam na poczatku
tab.pop(); //wybieram z konca
tab.push('Zenon'); //wstawiam na koncu



/* 9) ----------------------------------------------
Masz tablicę buttons z przyciskami:

var buttons = [...document.querySelectorAll('button')];

Wypisz ją w konsoli. Zrób po niej pętlę na następnie
dla każdego elementu ustaw właściwość innerText na
"Przycisk numer X" gdzie X to kolejny numer np.
buttons[0].innerText = "Przycisk numer 1"
---------------------------------------------- */
var buttons = [...document.querySelectorAll('button')];
console.log(buttons);
for (var i=0; i<buttons.length; i++) {
    buttons[i].innerText = "Przycisk numer " + (i+1);
}


/* 10) ----------------------------------------------
Stwórz tablicę z 5 randomowymi kolorami (z palca) - np. red, blue, yellow itp.
Za pomocą math random wylosuj losowy kolor z tej tablicy i ustaw tlo strony na ten kolor.
Ustawienie takie zrobisz poprzez linijkę:
document.body.style.backgroundColor = "twojKolor"
---------------------------------------------- */
var colors = ['red', 'blue', 'tomato', 'orange', 'gold'];
var min = 0;
var max = colors.length-1;
var nr = Math.floor(Math.random() * max) + min;
document.body.style.backgroundColor = colors[nr];