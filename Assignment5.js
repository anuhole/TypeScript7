"use strict";
class Shape {
    _color;
    dimension;
    constructor(num, color) {
        this._color = ' ';
        this.dimension = num;
    }
    get color() {
        return this._color;
    }
    set color(newColor) {
        this._color = newColor;
    }
}
class Circle extends Shape {
    get radius() {
        return this.dimension;
    }
    set radius(radius) {
        this.dimension = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends Shape {
    get side() {
        return this.dimension;
    }
    set side(side) {
        this.dimension = side;
    }
    area() {
        return this.side * this.side;
    }
}
const shape1 = new Circle(5, "red");
console.log(`Area of Circle is ${shape1.area()}`);
const shape2 = new Square(4, "blue");
console.log(`Area of Square is ${shape2.area()}`);
