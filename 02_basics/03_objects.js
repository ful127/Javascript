const user ={
    fullName:{
        firstName:"Abhishek",
        lastName:"Sharma"
    },
    rollNumber:2000680100016,
    Gmail:"abhi@456"

}
//console.log(user.fullName);
//console.log(user.fullName.lastName);
obj1 ={1:'a', 2:'b'};
obj2 ={3:'a',4:'b'};
obj3={4:'a',5:'b'};

obj={...obj1, ...obj2};

console.log(obj);