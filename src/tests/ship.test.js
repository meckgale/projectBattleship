const Ship = require('../scripts/ship.js');
let myShip;

beforeEach(() => {
    myShip = new Ship(3);
})

test('Constructor, hit and isSunk', () => {
    myShip.hit();
    expect(myShip.length).toBe(3);
    expect(myShip.hits).toBe(1);
    expect(myShip.isSunk()).toBe(false);
})

test('Constructor, hit and isSunk', () => {
    myShip.hit();
    myShip.hit();
    myShip.hit();
    expect(myShip.hits).toBe(3);
    expect(myShip.isSunk()).toBe(true);
})

test('Constructor, hit and isSunk', () => {
    myShip.hit();
    myShip.hit();
    expect(myShip.length).toBe(3);
    expect(myShip.hits).toBe(2);
    expect(myShip.isSunk()).toBe(false);
})

test('Constructor, hit and isSunk', () => {
    myShip = new Ship(5);
    myShip.hit();
    expect(myShip.length).toBe(5);
    expect(myShip.hits).toBe(1);
    expect(myShip.isSunk()).toBe(false);
})
