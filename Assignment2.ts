
class Product {
   readonly productId: number;
   readonly productName: string
   private productDes: string
   private _productprice: number

   constructor(productId: number, productName: string, productDes: string, productprice: number) {
      this.productId = productId
      this.productName = productName
      this.productDes = productDes
      this._productprice = productprice
   }


   public get productprice(): number {
      return this._productprice
   }
   public set productprice(newPrice: number) {
      if (newPrice> 0) {
        this._productprice = newPrice
      } else{
         console.log("Price must be greater than 0")
      } 

   }

   printProduct(): void {
      console.log(`ProductId:${this.productId} product Name:${this.productName} product Des: ${this.productDes} product price ${this._productprice} `)
   }

}


const p1: Product = new Product(101, "Laptop", "High-performance laptop", 1200);
p1.printProduct();
p1.productprice =1500;
p1.printProduct();
