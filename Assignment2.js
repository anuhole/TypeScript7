"use strict";
class Product {
    productId;
    productName;
    productDes;
    _productprice;
    constructor(productId, productName, productDes, productprice) {
        this.productId = productId;
        this.productName = productName;
        this.productDes = productDes;
        this._productprice = productprice;
    }
    get productprice() {
        return this._productprice;
    }
    set productprice(newPrice) {
        if (newPrice > 0) {
            this._productprice = newPrice;
        }
        else {
            console.log("Price must be greater than 0");
        }
    }
    printProduct() {
        console.log(`ProductId:${this.productId} product Name:${this.productName} product Des: ${this.productDes} product price ${this._productprice} `);
    }
}
const p1 = new Product(101, "Laptop", "High-performance laptop", 1200);
p1.printProduct();
p1.productprice = 1500;
p1.printProduct();
