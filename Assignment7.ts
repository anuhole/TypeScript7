function withTimeStamp<T extends {new(...arg:any[]):{}}>(constructor:T){
    return class extends constructor{
        timeStamp:Date=new Date()
    }
}

@withTimeStamp
class Contact{
    name:string;
    phone:string;
    email:string;

    constructor(name:string,phone:string,email:string){
        this.name=name
        this.phone=phone
        this.email=email
    }

}
const contact1 =new Contact("John Doe","1234567890","Anushka@gmail.com")
console.log(contact1)  