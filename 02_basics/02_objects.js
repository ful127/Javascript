const mysum = Symbol;
const myUser = {
    [mysum]: "key3",
    name: "Abhishek Sharma",
    Age: 20,
    Gmail: "abhi@456"
}
console.log(myUser.name);
console.log(myUser.Age);
console.log(myUser.Gmail);
console.log(myUser[mysum]);

