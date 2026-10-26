type Role = 'admin' | 'moderator' | 'user'

interface User{
    id:number;
    username:string;
    email:string;
    boi ?: string;
    role:Role
}

function processUser(user:User):string{
    return `Welocme ${user.username} with Role ${user.role}`
}
const sampleUser:User={
    id:101,
    username:'JohnDoe',
    email:'anus@gmail.com',
    role:'admin'
}
console.log(processUser(sampleUser))