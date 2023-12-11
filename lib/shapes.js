class Square {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="10" width="180" height="180" fill='${this.shapecolor}' />
        <text x="170" y="60" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        `
    }
}

class Circle {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="90" fill='${this.shapecolor}' />
        <text x="130" y="120" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        `
    }
}

class Triangle {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="${this.shapecolor}" />
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        `
    }
}