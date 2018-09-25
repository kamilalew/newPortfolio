/* -----------------------------------------
Napisz funkcję randomBetween, która przyjmie 2 parametry:
min i max. Funkcja niech zwróci nową losową liczbę z zakresu min - max
----------------------------------------- */
function randomBetween(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}



/* -----------------------------------------
1)
Napisz funkcję generateRandomTab która przyjmie 1 parametr - nr.
Funkcja niech zwraca nową tablicę z nr randomowych liczb z przedziału 1-10.
Do losowania liczb wykorzystaj funkcję z zadania 1.
2)
Stwórz nową zmienną podstawiając pod nią wynik funkcji generateRandomTab.
Wypisz w konsoli wartość tej liczby
----------------------------------------- */
function generateRandomTab(nr) {
    var tab = [];
    for (var i=0; i<nr; i++) {
        tab.push(randomBetween(1, 10));
    }
    return tab;
}

var arr = generateRandomTab(20);
console.log(arr);



/* -----------------------------------------
Napisz 3 funkcje:
1)
Funkcja smallName, która dostaje string, i zwraca go małymi literami
Jeżeli do funkcji przekazany jest nie string, wtedy funkcja niech zwróci false i wypisze błąd (console.error) w konsoli
2)
Funkcja bigName - podobną do powyższej, ale niech zwraca tekst dużymi literami
3)
Funkcje fixName - podobna do powyższych, ale zwracającą tekst który ma tylko pierwszą literę dużą, reszta małymi
----------------------------------------- */
function smallName(text) {
    if (typeof text !== "string") {
        console.error("Parametr to nie string");
        return false;
    }
    return text.toLowerCase();
}

function bigName(text) {
    if (typeof text !== "string") {
        console.error("Parametr to nie string");
        return false;
    }
    return text.toUpperCase();
}

function fixName(text) {
    if (typeof text !== "string") {
        console.error("Parametr to nie string");
        return false;
    }
    return text.charAt(0).toUpperCase() + text.substr(1);
}



/* -----------------------------------------
1)
Napisz funkcję fixNames, która przyjmuje 2 parametry:
- 1 parametr to tablica imion
- 2 parametr to słowo "small" lub "big" lub "fix".
Funkcja niech sprawdza czy pierwszy parametr to tablica, a drugi jedno z powyższych słów.
jak spradzić czy coś jest tablicą? Array.isArray(tablica)
Jeżeli któryś z warunków jest niepoprawny, funkcja niech zwraca false i wypisuje błąd w konsoli

Jeżeli oba parametry są poprawne, wtedy funkcja niech zwróci NOWĄ TABLICĘ ale ze zmienionymi imionami:
- jeżeli 2 parametr to small - imiona pisane małymi literami
- jeżeli 2 parametr to big - imiona pisane dużymi literami
- jeżeli 2 parametr to fix - niech zwróci imiona z dużej litery pisane małymi

2)
Stwórz prostą tablicę 5 imion.
Wywołaj dla niej funkcję fixNames
----------------------------------------- */
function fixNames(tab, type) {
    if (!Array.isArray(tab) && (type !== "small" && type !== "big" && type !== "fix")) {
        console.error("Niepoprawne parametry");
        return false;
    }

    var newTab = [];
    for (var i=0; i<tab.length; i++) {
        switch (type) {
            case "small" :
                newTab.push( smallName(tab[i]) );
            break;
            case "big" :
                newTab.push( bigName(tab[i]) );
            break;
            case "fix" :
                newTab.push( fixName(tab[i]) );
            break;
        }
    }

    return newTab;
}

var names = ["marcin", "Ania", "piotrek", "Grześ", "monika"];
console.log( fixNames(names, "small") );
console.log( fixNames(names, "big") );
console.log( fixNames(names, "fix") );
console.log( fixNames(names, "inne") );



/* -----------------------------------------
Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.
Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a"
to jest to żeńskie imię, w przeciwnym wypadku męskie.
Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie.
Przykładowo:
checkFebale("Ania") === true
checkFemale("Marcin") === false
----------------------------------------- */
function checkFemale(name) {
    if (name.charAt(name.length-1) === "a") {
        return true;
    }
    return false;
}



/* -----------------------------------------
Napisz funkcję countWomanInTable, do której przekażesz tablicę userów.
Funkcja powinna sprawdzić każdego użytkownika w talicy i zwrócić ile jest kobiet
Wykorzystaj do tego powyższą funkcję.
Jak pobrać imię z usera? Możesz to np osiągnąć za pomocą metody split.
Podziel string na 2 części - uzyskasz tablicę 2 elementów. Pierwszy to imię, drugi to nazwiwko
----------------------------------------- */

var users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]

function countWomanInTable(tab) {
    var count = 0;
    for (var i=0; i<tab.length; i++) {
        var parts = tab[i].split(' ');
        var name = parts[0];
        if ( checkFemale(name) ) {
            count++;
        }
    }
    return count;
}

/* -----------------------------------------
Wykorzystaj powyższą funkcję by wypisać w konsoli:
"Tablica users o długości .... zawiera .... kobiet i .... mężczyzn".
Odpowiednie miejsca wylicz za pomocą powyższej funkcji lub odpowiednich właściwości dla tablic
----------------------------------------- */

var womanCount = countWomanInTable(users);
var text = "Tablica users o długości " + users.length + " zawiera " + womanCount + "  kobiet i " + (users.length - womanCount) + " mężczyzn";
console.log(text);


/* -----------------------------------------
1)
Napisz funkcję checkEven, która przyjmuje 1 parametr - liczbę
Funkcja powinna sprawdzić czy przekazana liczba jest parzysta. Jeżeli jest
funkcja powinna zwrócić true, w przeciwynym wypadku false

2)
Napisz 2 funkcje:
a) funkcja writeOddInfo która wymaga 1 parametru - liczby.
    Funkcja niech wypisuje: "Liczba ... jest nieparzysta"

b) funkcja writeEvenInfo która wymaga 1 parametru - liczby.
    Funkcja niech wypisuje:  "Liczba ... jest parzysta"

3)
Wygeneruj tablicę z 10 randomowymi absolutnymi liczbami z przedziału 1-10 (wykorzystaj do tego
funkcję z poprzednich zadań)

4)
Napisz funkcję checkNumbersInTable, do której przekażesz powyższą tablicę.
Funkcja za pomocą funkcji checkEven powinna sprawdzić każdą liczbę czy jest pażysta czy nie.
Każdorazowo powinna także wypisać jaka to liczba korzystając z funkcji
writeOddInfo i writeEvenInfo
----------------------------------------- */
function checkEven(nr) {
    if (nr % 2 === 0) {
        return true;
    } else {
        return false;
    }
    //lub
    //return (nr % 2 ===0)? true : false;
}

function writeOddInfo(nr) {
    return "Liczba " + nr + " jest nieparzysta"
}

function writeEvenInfo(nr) {
    return "Liczba " + nr + " jest parzysta"
}

var table = generateRandomTab(10);

function checkNumbersInTable(arr) {
    for (var i=0; i<arr.length; i++) {
        if (checkEven(arr[i])) {
            console.log( writeEvenInfo(arr[i]) );
        } else {
            console.log( writeOddInfo(arr[i]) );
        }
    }
}


/* -----------------------------------------
1)
Napisz funkcję setBackground.
Funkcja powinna pobrać aktualną godzinę. Sprobuj wyszukać w necie
jak pobrać w js aktualną godzinę.
W zależności od godziny funkcja powinna wypisywać w konsoli:
6-10 - "Jest rano"
10-13 - "Jest przedpołudnie"
13-17 - "Jest popołudnie"
17-22 - "Jest wieczór"
22-6 - "Jest noc"

2)
Dodatkowo niech funkcja ustawia odpowiedni kolor tła dla body.
Aby ustawić kolor tła skorzystaj z instrukcji:
document.body.style.backgroundColor = "#ff0000";
gdzie kolor dobierz w zależności od pory.
----------------------------------------- */

function setBackground() {
    var date = new Date();
    var hour = date.getHours();

    if (hour >= 6 && hour <= 10) {
        console.log("Jest rano");
        document.body.style.backgroundColor = "#FFFCD3";
    }
    if (hour >= 10 && hour <=13) {
        console.log("Jest przedpołudnie");
        document.body.style.backgroundColor = "#B9D1F0";
    }
    if (hour >= 13 && hour <=17) {
        console.log("Jest popołudnie");
        document.body.style.backgroundColor = "#76A5EA";
    }
    if (hour >= 17 && hour <=22) {
        console.log("Jest wieczór");
        document.body.style.backgroundColor = "#333";
    }
    if (hour >= 22 && hour <=6 ) {
        console.log("Jest noc");
        document.body.style.backgroundColor = "#111";
    }
}

setBackground();





