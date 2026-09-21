function validateUser(user) {
    return user.name.toUpperCase();
}

function processUsers(users) {
    const results = [];
    for (let i = 0; i < users.length; i++) {
        results.push(validateUser(users[i]));
    }
    return results;
}

const userList = [
    { name: "Riya" },
    { age: 25 },
    { name: "Arjun" }
];

console.log(processUsers(userList));