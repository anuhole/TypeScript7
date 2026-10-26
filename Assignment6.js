"use strict";
function processUser(user) {
    return `Welocme ${user.username} with Role ${user.role}`;
}
const sampleUser = {
    id: 101,
    username: 'JohnDoe',
    email: 'anus@gmail.com',
    role: 'admin'
};
console.log(processUser(sampleUser));
