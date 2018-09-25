document.addEventListener("DOMContentLoaded", function () {


    /*4. Przygotowanie konstruktora*/
    function Furry() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    }


    function Coin() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }

    /*5. Przygotowanie obiektu zarządzającego grą.*/

    function Game() {
        this.board = document.querySelectorAll("#board div");
        // this.width = 10;
        // this.height = 10;

        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        var self = this;

        /*6. Obliczanie pozycji.*/
        this.index = function (x, y) {
            return x + (y * 10);
        }
    }


    /*7.*/
    Game.prototype.showFurry = function() {


        this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    };


    Game.prototype.showCoin = function() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
    };


    const game = new Game();
    game.showFurry();
    game.showCoin();



    /*8*/

    Game.prototype.startGame = function () {
        this.idSetInterval = setInterval(function(){
            game.showFurry();
            game.moveFurry();
        }, 250);
    };

    game.startGame();
    console.log("hura z setIntervala");


    /*8*/
    var self = this;
    Game.prototype.moveFurry = function () {

        /*to jest point 9 usuwanie duplicates */

        game.hideVisibleFurry();

        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        }
        else
        if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }
        game.showFurry();
        game.checkCoinCollision();
    };



    /*9*/
    Game.prototype.hideVisibleFurry = function () {
        document.querySelector('.furry').classList.remove('furry');
    };

    /*10*/



    Game.prototype.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                self.furry.direction = "left";
                break;
            case 38:
                self.furry.direction = "up";
                break;
            case 39:
                self.furry.direction = "right";
                break;
            case 40:
                self.furry.direction = "down";
                break;


        }
    };

    game.turnFurry();

    document.addEventListener('keydown', function(event){

        Game.turnFurry(event);
    });

});

