class Gameboard {
    constructor(size) {
        this.size =  Array.from({ length: size }, () => Array(size).fill(null));
    }
    placeShip() {

    }
    receiveAttack() {

    }
    trackMiss() {

    }
    gameOver() {

    }
}

module.exports = Gameboard;