const Gameboard = require('../scripts/gameboard.js');

describe('Gameboard', () => {
    test('constructor initializes the board with null values', () => {
        // Arrange
        const size = 10;
        
        // Act
        const gameboard = new Gameboard(size);
        
        // Assert
        expect(gameboard.size).toHaveLength(size);
        gameboard.size.forEach(row => {
            expect(row).toHaveLength(size);
            expect(row.every(cell => cell === null)).toBe(true);
        });
    });
    
});