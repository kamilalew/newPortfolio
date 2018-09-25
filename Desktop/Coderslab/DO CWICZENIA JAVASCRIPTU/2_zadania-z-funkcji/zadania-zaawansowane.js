/* -----------------------------------------
Napisz funkcję randomBetween, która przyjmie 2 parametry:
min i max. Funkcja niech zwróci nową losową liczbę z zakresu min - max
----------------------------------------- */



/* -----------------------------------------
1)
Napisz funkcję generateRandomTab która przyjmie jeden parametr - nr.
Funkcja niech zwraca nową tablicę z nr randomowych liczb.
Do losowania liczb wykorzystaj funkcję z zadania 1.
2)
Stwórz nową zmienną podstawiając pod nią wynik funkcji generateRandomTab.
Wypisz w konsoli wartość tej liczby
----------------------------------------- */



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



/* -----------------------------------------
Napisz funkcję fixNames, która przyjmuje 2 parametry:
- 1 parametr to tablica imion
- 2 parametr to słowo "small" lub "big" lub "fix".
Funkcja niech sprawdza czy pierwszy parametr to tablica, a drugi jedno z powyższych słów.

Jeżeli oba parametry są poprawne, wtedy funkcja niech zwróci nową tablicę ale ze zmienionymi imionami:
- jeżeli 2 parametr to small - imiona pisane małymi literami
- jeżeli 2 parametr to big - imiona pisane dużymi literami
- jeżeli 2 parametr to fix - niech zwróci imiona z dużej litery pisane małymi
----------------------------------------- */



/* -----------------------------------------
Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.
Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a"
to jest to żeńskie imię, w przeciwnym wypadku męskie.
Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie.
Przykładowo:
checkFebale("Ania") === true
checkFemale("Marcin") === false
----------------------------------------- */



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




/* -----------------------------------------
Wykorzystaj powyższą funkcję by wypisać w konsoli:
"Tablica users o długości .... zawiera .... kobiet i .... mężczyzn".
Odpowiednie miejsca wylicz za pomocą powyższej funkcji lub odpowiednich właściwości dla tablic
----------------------------------------- */




/* -----------------------------------------
1)
Napisz funkcję checkEven, która przyjmuje 1 parametr - liczbę
Funkcja powinna sprawdzić czy przekazana liczba jest parzysta. Jeżeli jest
funkcja powinna zwrócić true, w przeciwynym wypadku false

2)
Napisz 2 funkcje:
a) funkcja writeOddInfo która wymaga 1 parametru.
    Funkcja niech wypisuje: "Liczba ... jest nieparzysta"

b) funkcja writeEvenInfo która wymaga 1 parametru.
    Funkcja niech wypisuje:  "Liczba ... jest parzysta"

3)
Wygeneruj tablicę z 10 randomowymi absolutnymi liczbami z przedziału 1-10
4)
Napisz funkcję checkNumbersInTable, do której przekażesz powyższą tablicę.
Funkcja za pomocą funkcji checkEven powinna sprawdzić każdą liczbę czy jest pażysta czy nie.
Każdorazowo powinna także wypisać jaka to liczba korzystając z funkcji
writeOddInfo i writeEvenInfo
----------------------------------------- */




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
Zróć uwagę jak zwracana jest godzina w JS.

2)
Dodatkowo niech funkcja ustawia odpowiedni kolor tła dla body.
Aby ustawić kolor tła skorzystaj z instrukcji:
document.body.style.backgroundColor = "#ff0000";
gdzie kolor dobierz w zależności od pory.
----------------------------------------- */






