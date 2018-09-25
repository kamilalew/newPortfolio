document.addEventListener("DOMContentLoaded", function () {

    var Furry = require('./furry.js');
    var Coin = require('./coin.js');


    /*5. Przygotowanie obiektu zarządzającego grą.*/

    function Game() {
        this.board = document.querySelectorAll("#board div");
        // this.width = 10;
        // this.height = 10;

        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;


        /*6. Obliczanie pozycji.*/
        this.index = function (x, y) {
            return x + (y * 10);
        }
    }


    /*7.*/
    Game.prototype.showFurry = function () {


        this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    };


    Game.prototype.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
    };

    /*8*/

    Game.prototype.startGame = function () {
        this.idSetInterval = setInterval(function () {
            game.showFurry();
            game.moveFurry();
        }, 250);
    };


    /*8*/

    Game.prototype.moveFurry = function () {

        /*to jest point 9 usuwanie duplicates */

        game.hideVisibleFurry();



        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else
        if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }

        game.gameOver();
        game.showFurry();
        game.checkCoinCollision();


    };


    /*9*/
    Game.prototype.hideVisibleFurry = function () {
        document.querySelector('.furry').classList.remove('furry');
    };

    /*10*/

    Game.prototype.turnFurry = function (event) {
        var self = this;
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

    /*11*/

    Game.prototype.checkCoinCollision = function () {
        if ((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)) {
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
            this.score++;
            document.querySelector('#score div strong').innerText = this.score;

            this.coin = new Coin();
            game.showCoin()
        }
    };


    /*12*/

    Game.prototype.gameOver = function () {
        if((this.furry.x < 0) || (this.furry.x > 9) || (this.furry.y < 0) || (this.furry.y > 9)) {

            clearInterval(this.idSetInterval);
            game.hideVisibleFurry();

            const game_over = document.getElementById("over");
            game_over.querySelector("h1").innerText = "GAME OVER";
            game_over.querySelector("h2").innerText = "Your points:";
            game_over.querySelector("h3").innerText = this.score
        }
    };



    const game = new Game();

    game.showFurry();
    game.showCoin();
    game.startGame();


    document.addEventListener('keydown', function (event) {
        game.turnFurry(event);
    });



});