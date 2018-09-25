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

var array = [];
for (var i =0; i<10; i++) {
    array.push(i)
}
console.log(array);

/* 2) ----------------------------------------------
Stwórz pustą tablicę
Za pomocą pętli dodaj do niej 10 randomowych liczb z przedzialu 1-10
---------------------------------------------- */
var array = [];
for (var i =0; i<10; i++) {
    array.push(Math.round(Math.random() * (10-1) +1 ));
}
console.log(array);

/* 3) ----------------------------------------------
Stwórz tablicę z 10 ramdomowymi liczbami z przedziału 1-10.
Wypisz w konsoli liczby większe od 5
---------------------------------------------- */
var array = [];

for (var i =0; i<10; i++) {
    array.push(Math.round(Math.random() * (10-1) +1 )); //JA WPISUJE 10-1 ZAMIAST 10, CZY OK?
}
for (var j = 0; j<array.length; j++) {
    if (array[j]>5){
        console.log(array[j]);
    }
}



/* 4) ----------------------------------------------
Stwórz tablicę z 10 randomowymi liczbami
Wypisz w konsoli największą liczbę w tablicy
Przemyśl wcześniej jak znaleźć taką liczbę
---------------------------------------------- */
var array = [];

for (var i =0; i<10; i++) {
    array.push(Math.round(Math.random() * (10-1) +1 ));
}

array = array.sort(function (a, b) {  return b - a;  }); //CZY TO JEST OK?

console.log(array[0])

/* 5) ----------------------------------------------
Stwórz 2 proste tablice z 5 elementami (możesz z palca)
Połącz te 2 tablice w jedną NOWĄ tablicę, a następnie w konsoli wypisz nową tablicę oraz jej długość
---------------------------------------------- */
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,10];

var array3 =array1.concat(array2);
console.log(array3);
console.log(array3.length);

/* 6) ----------------------------------------------
Stwórz 2 tablice z 4 rożnymi słowami każda.
Sprawdź w której tablicy suma liter imion jest większa
Wynik wypisz w konsoli
---------------------------------------------- */
var arr1 = ["gin", "coff", "lidia", "friend"];
var arr2 = ["isle", "worth", "my", "town"];
 var result1 = 0;
var result2 = 0;

for (var i = 0; i<arr1.length; i++) {
    result1+= arr1[i].length;
}

for (var j = 0; j<arr2.length; j++) { //CZY NIE MUSI BYC J???
    result2+= arr2[j].length;
}

if (result1>result2) {
    console.log("arr1 is longer");
}else if(result2>result1) {
    console.log("arr2 is longer");
}else{
    console.log("they're the same")
}


    /* 7) ----------------------------------------------
    Stwórz tablicę 10 randomowych liczb z przedziału 1-10
    Wypisz w konsoli tekst:
    "[ liczba1 ][ liczba2 ][ liczba3 ]" i tak dalej
    Spróbuj użyć odpowiedniej metody do połączenia elementów tablic w jeden tekst
    ---------------------------------------------- */

var array = [];

for (var i =0; i<10; i++) {
    array.push(Math.round(Math.random() * (10-1) +1 ));
}


console.log( '[ ' + array.join(' ][ ') + ' ]') //NIE ROZUMIEM


/* 8) ----------------------------------------------
Stwórz tablicę 5 imion.
Wypisz w konsoli pierwsze i ostatnie imie w tablicy
Za pomocą odpowiednich metod zamień w tablicy:
Pierwsze imię na "Andrzej"
Ostatnie imię zamień na "Zenon"
---------------------------------------------- */
var arr1 = ["gin", "coff", "lidia", "friend", "bob"];

console.log(arr1[0], arr1[arr1.length-1]); //ostatnia

arr1[0] = "Andrzej";

arr1[arr1.length-1] = "Zenon";

console.log(arr1);

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
console.log(buttons);

/* 10) ----------------------------------------------
Stwórz tablicę z 5 randomowymi kolorami (z palca) - np. red, blue, yellow itp.
Za pomocą math random wylosuj losowy kolor z tej tablicy i ustaw tlo strony na ten kolor.
Ustawienie takie zrobisz poprzez linijkę:
document.body.style.backgroundColor = "twojKolor"
---------------------------------------------- */

var colors = ["white" , "grey", "blue", "red", "pink"];
var randomColor = colors[Math.floor(colors.length * Math.random())];

document.body.style.backgroundColor = randomColor; //INACZEJ

