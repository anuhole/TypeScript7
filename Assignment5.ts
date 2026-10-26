abstract class Shape{
    private _color:string
    dimension :number

    constructor(num:number,color:string){
        this._color=' '
        this.dimension=num
    }

    get color():string{ 
        return this._color
    }
    set color(newColor:string){
       this._color=newColor
    }
    abstract area():number

}
class Circle extends Shape{
    
    
    get radius():number{
        return this.dimension
    }
    set radius(radius:number){
        this.dimension=radius
    }
    area():number{
        return Math.PI*this.radius*this.radius
    }
}
class  Square extends Shape{
    get side():number{
        return this.dimension
    }   
    set side(side:number){
        this.dimension=side
    }
    area():number{
        return this.side*this.side
    }   
}

const shape1 =new Circle(5,"red")
console.log(`Area of Circle is ${shape1.area()}`)

const shape2 =new Square(4,"blue")
console.log(`Area of Square is ${shape2.area()}`)
