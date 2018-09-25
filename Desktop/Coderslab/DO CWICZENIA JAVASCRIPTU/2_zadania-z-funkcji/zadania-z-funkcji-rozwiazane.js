//#######################################################
//#######################################################
// MINI PRZYPOMNIENIE, ZADANIA SA PONIZEJ
//#######################################################
//#######################################################
// var tab = [7,9,2,8,6];
// var pierszaLiczbaWTablicy = tab[0];
// var ostatniaLiczbaWTablicy = tab[ tab.length-1 ];


// //-------------------------------------
// //zwykla petla od 0 do 10
// //-------------------------------------
// for (var i = 0; i<10; i++) {
//     console.log(i); //0, 1, 2, 3...
// }


// //-------------------------------------
// //petla po tablicy
// //-------------------------------------
// for (var i=0; i<tab.length; i++) {
//     var x = tab[i]; //pobierz wartość tablicy spod indeksu [0], [1], [2]...
//     console.log(x); //7,9,2,8,6
// }


// //-------------------------------------
// //sumowanie tablicy
// //-------------------------------------
// var sum = 0;
// for (var i=0; i<tab.length; i++) {
//     sum += tab[i]
// }
// console.log(sum);



// //-------------------------------------
// //deklaracja funkcji
// //-------------------------------------
// //jako definicja
// function myF() {

// }

// //lub jako wyrazenie - czyli funkcja anonomowa (bez nazwy po slowie function) podstawiona od razu pod zmienną myF
// var myF = function() {

// }



// //deklaracja funkcji ktora przyjmuje parametr
// function myF(a) {

// }

// //deklaracja funkcji ktora przyjmuje parametr i zwraca jakas wartosc
// //zauwaz ze my tu jeszcze nie mamy zadnych wartosci
// //robimy tylko zalozenie ze "a" bedzie numerem i dzialmy na tym "a"
// //sama wartosc zmiennej pozniej trafi w miejsce "a"
// function myF(a) {
//     return a*a;
// }


// //Dopoki nie wywolamy powyzszej funkcji, jest to tylko "wydmuszka", kod ktory jeszcze nie dziala
// //dopiero po jej wywolaniu w miejsce "a" trafia wlasciwa zmienna
// myF(20); //tutaj recznie wstawiona wartosc

// var x = 10;
// myF(x); //a tutaj uzycie zmiennej


//#######################################################
//#######################################################
// ZADANIA
//#######################################################
//#######################################################


/* ----------------
Zadanie 0 A
Napisz funkcję, która przyjmie jeden parametr - dowolny tekst
Funkcja niech ZWRACA tekst "Liczba liter: ...." gdzie .... to liczba liter tekstu
NIE Wywoluj narazie tej funkcji
*/

function moja(txt) {
    return "Liczba liter " + txt.length;
}


/* ----------------
Zadanie 0 B
Wywołaj powyższą funkcję przekazując do niej jakis tekst,
który podstawisz wczesniej pod zmienną
*/

moja("Ala ma kota")


/* ----------------
Zadanie 1 A
Napisz funkcje, która zsumuje przekazaną do niej tablicę
i zwraca wynik (sumę)
NIE Wywoluj narazie tej funkcji
*/

function sumTable(tab) {
    var sum = 0;
    for (var i = 0; i<tab.length; i++) {
        sum = sum + tab[i];
    }
    return sum;
}


/* ----------------
Zadanie 1 B
Zdefiniuj prostą tablicę tab, która ma w sobie 5 liczb (dowolnych)
Wywolaj funkcje z poprzedniego zadania przekazujac do niej tą tablicę
Wypisz w konsoli rezultat działania funkcji z poprzedniego zadania
*/

var arr = [1,2,3,4,5];
console.log(   sumTable(arr)   );


/* ----------------
Zadanie 2 A
Napisz funkcję, która przyjmie dowolny tekst
Funkcja niech zwraca tekst, ktory ma zmiksowana wielkosc liter np:
input  -> Ala ma kota
output -> AlA Ma kOtA
NIE Wywoluj narazie tej funkcji
*/

function mix(txt) {
    var str = '';
    for (var i=0; i<txt.length; i++) {
        if (i%2===0) {
            str += txt.charAt(i).toUpperCase();
        } else {
            str += txt.charAt(i).toLowerCase();
        }
    }
    return str;
}


/* ----------------
Zadanie 2 A
Wywolaj funkcje z powyzszego zania przekazujac do niej zmienna, ktora jako wartosc ma tekst
"Ala ma kota"
Wypisz rezultat w konsoli
*/
var text = "Ala ma kota";
console.log(    mix(text)   );

/* ----------------
Zadanie 3a
Napisz funkcje, ktora bedzie wymagac 2 atrybutów
Funkcja niech sprawdza, czy oba atrybuty są numerami
Funkcja ma zwracac iloczyn (*) obu liczb.
Jezeli ktorys z atrybutow nie jest liczba, funkcja niech zwraca false
NIE Wywoluj narazie tej funkcji
*/
function iloczyn(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    } else {
        return false;
    }
}


/* ----------------
Zadanie 3b
Wywolaj powyzszą funkcje przekazując do niej
dwie dowolne liczby. Dodatkowo wywolaj ja i sprawdz jej dzialanie
gdy przekazesz do niej zmienne innych typow.
*/

console.log( iloczyn(10, 20) );
console.log( iloczyn("lorem", 20) );

/* ----------------
Zadanie 4
Napisz funkcje, ktora przyjmuje 2 parametry:
1) imię - np: Ala
2) miesiac - np: styczen
Funkcja ma zwracac:
jezeli miesiac to -> grudzien, styczen, luty
	"Ala jezdzi na sankach"
jezeli miesiac to -> marzec, kwiecien, maj
	"Ala chodzi po kaluzach"
jezeli miesiac to -> czerwiec, lipiec, sierpien
	"Ala sie opala"
jezeli miesiac to -> wrzesien, pazdziernik, listopad
	"Ala zbiera liscie"
NIE Wywoluj narazie tej funkcji
*/

function printActions(name, month) {
    month = month.toLowerCase();

    if (month === "grudzien" || month === "styczen" || month === "luty") {
        return name + " jezdzie na sankach";
    }
    if (month === "marzec" || month === "kwiecien" || month === "maj") {
        return name + " chodzi po kaluzach";
    }
    if (month === "czerwiec" || month === "lipiec" || month === "sierpien") {
        return name + " sie opala";
    }
    if (month === "wrzesien" || month === "pazdziernik" || month === "listopad") {
        return name + " zbiera liscie";
    }

    return name + " uczy się JS";
}



/* ----------------
Zadanie 4 a
Wywolaj funkcje z powyzszego zania przekazujac do niej zmienne:
- Twoje imie
- dowolny miesiac
Dopisz w funkcji zabezpieczenie, ktore pozwoli wpisac miesiac malymu lub duzymi literami
Jezeli miesiac jest "innym słowem", funkcja niech zwraca "Ala uczy się JS"
*/
printActions("Marcin", "wrzesien");



/* ----------------
Zadanie 5
mamy przykładowy tekst:

var str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

Napisz funkcję, która przyjmie 2 atrybuty:
- tekst
- znak rozdzialu (np |)

Skorzystaj z odpowiedniej metody String (poszukaj w necie),
tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdzialu.
W wyniku rozdzielenia powinienes dostać tablicę.

Funkcja niech posegreguje tą tablicę alfabetycznie.
Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona
znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

input  -> "Ania|Marcin|Bartek"
output -> "Ania|Bartek|Marcin"

Wywolaj tą funkcję przekazując do niej str z początku zadania
*/

function sortString(txt, char) {
    var tab = txt.split(char);
    tab = tab.sort();

    var newStr = tab.join("|");
    return newStr;
}


var str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
console.log(str);
console.log(   sortString(str, '|')   );


/* ----------------
Zadanie 6
Wygeneruj pod zmienną "tab" 10 elementową tablicę z randomowymi liczbami.
Napisz funkcję getMinFromTab, do której przekażesz tablicę z pkt A
Funkcja powinna zwrócić najmniejszą liczbę z tablicy
Za pomocą console.log wypisz wartosc zwróconą przez funkcję
*/

function getMinFromTab(tab) {
    var min = 1000000;
    for (var i=0; i<tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i]
        }
    }
    return min;
}


//generujemy tablice
var tab = [];
for (var i=0; i<10; i++) {
    tab.push(  Math.floor(Math.random() * 10)+1  );
}

//odpalamy funkcje przekazujac tablice
console.log(  getMinFromTab(tab)  );

/* ----------------
Zadanie 7
Napisz 2 funkcje. Kazda z nich niech przyjmuje tablicę imion.

Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane duzymi literami.
Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkośc liter.
W przypadku drugiej funkcji do zamiany imion skorzystaj z funkcji z zadania "Zadanie 2 A"

input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output1 -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]


*/

function bigNames(tab) {
    for (var i=0; i<tab.length; i++) {
        tab[i] = tab[i].toUpperCase();
    }
    return tab;
}

function mixNames(tab) {
    for (var i=0; i<tab.length; i++) {
        tab[i] = mix(tab[i]); //mix - nasza funkcja z zadania 2A
    }
    return tab;
}


var tab = ["Ania" , "Marcin" , "Bartek" , "Piotr"];
console.log(bigNames(tab));
console.log(mixNames(tab));

/* ----------------
Zadanie 8
Napisz funkcję która przyjmie 2 atrybuty:
- tekst
- liczbę n

Funkcja niech zwraca napis będący zduplikowany n razy:
input : tekst: "ala", n: 4
output: "alaalaalaala"

Funkcja niech sprawdza czy oba parametry są podane.
Jeżeli parametr tekst nie jest podany lub nie jest tekstem, funkcja powinna go ustawić na pusty string ""
Jeżeli parametr n nie jest podany, funkcja powinna ustawić go na 2.
Przykłady użycia:

input : tekst: "kot", n: 2
output: "kotkot"

input : tekst: "x", n: nie podany
output: "xx"

input : tekst: nie podany, n: 2
output: ""

Wywołaj tą funkcję z parametrami i bez nich
*/

function duplicateText(text, nr) {
    if (typeof text !== 'string') {
        text = '';
    }
    if (typeof nr === 'number') {
        nr = 2;
    }

    var newStr = '';
    for (var i=0; i<nr; i++) {
        newStr += text;
    }

    return newStr;

}

console.log(duplicateText('maslo', 10));