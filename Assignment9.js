"use strict";
class Datasorage {
    item = [];
    addItem(item) {
        this.item.push(item);
    }
    removeItem(item) {
        const index = this.item.indexOf(item);
        if (index !== -1) {
            this.item.splice(index, 1);
        }
    }
    getItems() {
        return [...this.item];
    }
    searchItem(item) {
        return this.item.includes(item);
    }
}
const stringStorage = new Datasorage();
stringStorage.addItem("Hello");
stringStorage.addItem("World");
console.log(stringStorage.getItems());
stringStorage.removeItem("Hello");
console.log(stringStorage.getItems());
console.log(stringStorage.searchItem("World"));
const numberStorage = new Datasorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
console.log(numberStorage.searchItem(2));
