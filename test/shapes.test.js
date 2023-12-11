const { Square, Circle, Triangle } = require('../lib/shapes.js');

describe('Squares', () => {
    it('produces a red square with SVG in white text', () => {
        const square = new Square('SVG', 'white', 'red');
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="10" width="180" height="180" fill='red' /><text x="170" y="60" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`)
    });
});

describe('Circles', () => {
    it('produces a green circle with SVG in white text', () => {
        const circle = new Circle('SVG', 'white', 'green');
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="90" fill='green' /><text x="130" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`)
    });
});

describe('Triangles', () => {
    it('produces a salmon triangle with SVG in near-black text', () => {
        const triangle = new Triangle('SVG', '#302e2e', '#d98d7e');
        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,182 56,182" fill="#d98d7e" /><text x="150" y="170" font-size="60" text-anchor="middle" fill="#302e2e">SVG</text></svg>`)
    });
});