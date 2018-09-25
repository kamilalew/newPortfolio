/*
2)
Wygeneruj nowÄ… tablice z obiektami wykorzystujÄ…c funkcjÄ™ z 1 zadania
- Wylicz ile pieniÄ™dzy majÄ… wszyscy uÅ¼ytkownicy razem.
- Wylicz Å›redni wiek wszystkich uÅ¼ytkownikÃ³w
 */
var users = [
    [  1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28] ,
    [  2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37] ,
    [  3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06] ,
    [  4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64] ,
    [  5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54] ,
    [  6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08] ,
    [  7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21] ,
    [  8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72] ,
    [  9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68] ,
    [ 10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44] ,
    [ 11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52] ,
    [ 12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.10] ,
    [ 13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07] ,
    [ 14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97] ,
    [ 15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64]
]

function fixData(users) {
    var newArray = [];
    for ( var i = 0; i<users.length; i++) {
        var newData = {
            id: users[i][0],
            name: users[i][1],
            surname: users[i][2],
            email: users[i][3],
            age: users[i][4],
            value: users[i][5]
        }
        newArray.push(newData);

    }

    return newArray;
}

fixData(users);

var userObject = fixData(users);

console.log(userObject);

var userObject = fixData(users);
var sumAge = 0;
for (var i = 0; i < userObject.length; i++) {
    sumAge = userObject[i].age + sumAge;
}
console.log(sumAge);

var sumMoney = 0;
for (var i = 0; i < userObject.length; i++) {
    sumMoney = userObject[i].value + sumMoney;
}
console.log(sumMoney);
