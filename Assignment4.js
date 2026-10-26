"use strict";
class Employee {
    _empName;
    _salary;
    _base_loc;
    _des;
    _isEligible;
    _hikePercentage;
    constructor(name, salary, basLoc, des, isEligible, hike) {
        this._empName = name;
        this._salary = salary;
        this._base_loc = basLoc;
        this._des = des;
        this._isEligible = isEligible;
        this._hikePercentage = hike;
    }
    calcalateSalary() {
        const da = 0.10 * this._salary;
        const hrf = 0.15 * this._salary;
        const pf = 0.12 * this._salary;
        return this._salary + da + hrf - pf;
    }
    getSalary() {
        if (this._isEligible) {
            return this.calcalateSalary();
        }
        return "You  are Not Elidible!!!";
    }
    incPrice() {
        if (this._isEligible) {
            this._salary = this._salary + this._hikePercentage * this._salary;
            return this._salary;
        }
        return "You  are Not Elidible!!!";
    }
}
const emp1 = new Employee("John", 50000, "New York", "Manager", "Yes", 0.10);
console.log(`Salary of ${emp1['_empName']} is ${emp1.getSalary()}`);
console.log(`Salary of ${emp1['_empName']} after hike is ${emp1.incPrice()}`);
console.log(`Salary of ${emp1['_empName']} after hike is ${emp1.getSalary()}`);
