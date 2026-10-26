class Employee{
    private _empName:string;
    private _salary:number;
    private _base_loc:string;
    private _des :string;
    private _isEligible:string;
    private _hikePercentage:number;

    constructor(name:string,salary:number,basLoc:string,des:string,isEligible:string,hike:number){
        this._empName=name
        this._salary=salary
        this._base_loc=basLoc
        this._des=des
        this._isEligible=isEligible
        this._hikePercentage=hike
    }
    private calcalateSalary(): number{
        const da = 0.10*this._salary
        const hrf = 0.15*this._salary
        const pf = 0.12 *this._salary

        return this._salary+da+hrf-pf
    }
    public getSalary():number | string {
        if(this._isEligible){
          return  this.calcalateSalary()
        }
        return "You  are Not Elidible!!!"
    
    }

    public incPrice():number |string{
        if(this._isEligible){
            this._salary=this._salary+this._hikePercentage*this._salary
            return this._salary
        }
        return "You  are Not Elidible!!!"
    }
}

const emp1 =new Employee("John",50000,"New York","Manager","Yes",0.10)
console.log(`Salary of ${emp1['_empName']} is ${emp1.getSalary()}`)
console.log(`Salary of ${emp1['_empName']} after hike is ${emp1.incPrice()}`)
console .log(`Salary of ${emp1['_empName']} after hike is ${emp1.getSalary()}`)  