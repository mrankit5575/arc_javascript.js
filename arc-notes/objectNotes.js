# JavaScript Objects (Basic to Advanced) 🚀

Objects are one of the **most important concepts** in JavaScript. If you master objects, you'll understand React, Node.js, Express, MongoDB, APIs, JSON, and almost every modern JavaScript framework.

---

# 1. What is an Object?

An object stores data in **key-value pairs**.

Think of it like a student ID card.

```
Name : Ankit
Age : 21
City : Delhi
```

In JavaScript:

```javascript
const student = {
    name: "Ankit",
    age: 21,
    city: "Delhi"
};
```

Here,

```
name -> key
Ankit -> value

age -> key
21 -> value
```

---

# 2. Why Objects?

Suppose you store student information.

Without object

```javascript
const name = "Ankit";
const age = 21;
const city = "Delhi";
```

Problem

How do you know these belong together?

Using object

```javascript
const student = {
    name: "Ankit",
    age: 21,
    city: "Delhi"
};
```

Everything is stored in one place.

---

# 3. Syntax

```javascript
const objectName = {
    key: value,
    key2: value2
};
```

Example

```javascript
const car = {
    brand: "BMW",
    color: "Black",
    price: 5000000
};
```

---

# 4. Accessing Object Properties

### Dot Notation

```javascript
console.log(car.brand);
```

Output

```
BMW
```

---

### Bracket Notation

```javascript
console.log(car["brand"]);
```

Output

```
BMW
```

---

Why bracket notation?

Because variables can be used.

```javascript
const key = "brand";

console.log(car[key]);
```

Output

```
BMW
```

---

# 5. Add Property

```javascript
const user = {
    name: "Ankit"
};

user.age = 21;

console.log(user);
```

Output

```
{
 name:"Ankit",
 age:21
}
```

---

# 6. Update Property

```javascript
user.age = 22;
```

Output

```
{
name:"Ankit",
age:22
}
```

---

# 7. Delete Property

```javascript
delete user.age;

console.log(user);
```

Output

```
{
name:"Ankit"
}
```

---

# 8. Object with Different Data Types

```javascript
const person = {
    name: "Ankit",
    age: 21,
    isStudent: true,
    marks: [90,80,95],
    address: {
        city: "Delhi",
        pin: 110084
    }
};
```

Object can store

* String
* Number
* Boolean
* Array
* Object
* Function

---

# 9. Nested Object

```javascript
const user = {
    name: "Ankit",
    address: {
        city: "Delhi",
        country: "India"
    }
};
```

Access

```javascript
console.log(user.address.city);
```

Output

```
Delhi
```

---

# 10. Object inside Object

```javascript
const company = {
    name: "Google",

    CEO: {
        name: "Sundar",
        age: 52
    }
};
```

Access

```javascript
console.log(company.CEO.name);
```

---

# 11. Array inside Object

```javascript
const student = {
    name: "Ankit",
    skills: ["HTML","CSS","JavaScript"]
};

console.log(student.skills[1]);
```

Output

```
CSS
```

---

# 12. Object inside Array

```javascript
const students = [
    {
        name: "Ankit",
        age:21
    },
    {
        name:"Rahul",
        age:20
    }
];
```

Access

```javascript
console.log(students[1].name);
```

Output

```
Rahul
```

---

# 13. Functions inside Object

These are called **methods**.

```javascript
const person = {

    name:"Ankit",

    greet:function(){

        console.log("Hello");

    }

};

person.greet();
```

Output

```
Hello
```

---

Short Syntax

```javascript
const person = {

    greet(){

        console.log("Hello");

    }

};
```

---

# 14. Using this Keyword

```javascript
const person = {

    name:"Ankit",

    greet(){

        console.log("Hello " + this.name);

    }

};

person.greet();
```

Output

```
Hello Ankit
```

`this` means **current object**.

---

# 15. Object.keys()

Returns all keys.

```javascript
const user = {
    name:"Ankit",
    age:21
};

console.log(Object.keys(user));
```

Output

```
["name","age"]
```

---

# 16. Object.values()

```javascript
console.log(Object.values(user));
```

Output

```
["Ankit",21]
```

---

# 17. Object.entries()

```javascript
console.log(Object.entries(user));
```

Output

```
[
["name","Ankit"],
["age",21]
]
```

---

# 18. Loop through Object

```javascript
const user = {
    name:"Ankit",
    age:21
};

for(let key in user){

    console.log(key,user[key]);

}
```

Output

```
name Ankit
age 21
```

---

# 19. Check Property

```javascript
console.log("name" in user);
```

Output

```
true
```

---

# 20. hasOwnProperty()

```javascript
console.log(user.hasOwnProperty("age"));
```

Output

```
true
```

---

# 21. Object.assign()

Copy object

```javascript
const obj1 = {
    a:1
};

const obj2 = Object.assign({},obj1);

console.log(obj2);
```

---

# 22. Spread Operator

```javascript
const user = {
    name:"Ankit",
    age:21
};

const copy = {
    ...user
};
```

---

Merge Objects

```javascript
const a = {
    x:1
};

const b = {
    y:2
};

const c = {
    ...a,
    ...b
};

console.log(c);
```

Output

```
{
x:1,
y:2
}
```

---

# 23. Destructuring

```javascript
const user = {

    name:"Ankit",
    age:21

};

const {name,age} = user;

console.log(name);
```

Output

```
Ankit
```

Rename

```javascript
const {name:userName} = user;

console.log(userName);
```

---

# 24. Dynamic Keys

```javascript
const key = "city";

const user = {

    [key]:"Delhi"

};

console.log(user.city);
```

---

# 25. Freeze Object

```javascript
const user = {

    name:"Ankit"

};

Object.freeze(user);

user.name = "Rahul";

console.log(user.name);
```

Output

```
Ankit
```

Cannot modify.

---

# 26. Seal Object

```javascript
const user = {

    name:"Ankit"

};

Object.seal(user);

user.name="Rahul";

user.age=21;

console.log(user);
```

Output

```
{
name:"Rahul"
}
```

Cannot add/delete properties, but can modify existing ones.

---

# 27. Object.create()

```javascript
const person = {

    greet(){

        console.log("Hello");

    }

};

const user = Object.create(person);

user.greet();
```

---

# 28. Optional Chaining

```javascript
const user = {

    address:{

        city:"Delhi"

    }

};

console.log(user.address?.city);

console.log(user.phone?.number);
```

Output

```
Delhi
undefined
```

No error if property doesn't exist.

---

# 29. Nullish Coalescing

```javascript
const user = {};

console.log(user.name ?? "Guest");
```

Output

```
Guest
```

---

# 30. JSON

Convert Object → JSON

```javascript
const user = {

    name:"Ankit"

};

const json = JSON.stringify(user);

console.log(json);
```

Output

```
{"name":"Ankit"}
```

Convert JSON → Object

```javascript
const obj = JSON.parse(json);

console.log(obj);
```

---

# 31. Shallow Copy vs Deep Copy

### Shallow Copy

```javascript
const obj1 = {
    address:{
        city:"Delhi"
    }
};

const obj2 = {
    ...obj1
};

obj2.address.city="Mumbai";

console.log(obj1.address.city);
```

Output

```
Mumbai
```

Nested objects are still shared.

---

### Deep Copy

```javascript
const obj2 = structuredClone(obj1);
```

Now nested objects are independent.

---

# 32. Property Descriptors

```javascript
const user = {
    name: "Ankit"
};

Object.defineProperty(user, "id", {
    value: 101,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(user.id); // 101
```

---

# 33. Getters and Setters

```javascript
const person = {
    firstName: "Ankit",
    lastName: "Singh",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        const [first, last] = value.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
};

console.log(person.fullName);

person.fullName = "Rahul Sharma";

console.log(person.fullName);
```

---

# 34. Symbol Keys

```javascript
const id = Symbol("id");

const user = {
    name: "Ankit",
    [id]: 101
};

console.log(user[id]);
```

Symbol keys help avoid property name collisions.

---

# 35. Object.fromEntries()

```javascript
const entries = [
    ["name", "Ankit"],
    ["age", 21]
];

const obj = Object.fromEntries(entries);

console.log(obj);
```

---

# 36. Object.groupBy() (Modern JavaScript)

```javascript
const users = [
    { name: "Ankit", city: "Delhi" },
    { name: "Rahul", city: "Mumbai" },
    { name: "Amit", city: "Delhi" }
];

const grouped = Object.groupBy(users, user => user.city);

console.log(grouped);
```

---

# 37. Prototypes

Every object in JavaScript has a hidden prototype that allows it to inherit properties and methods.

```javascript
const animal = {
    eat() {
        console.log("Eating...");
    }
};

const dog = Object.create(animal);

dog.eat();
```

---

# 38. Common Interview Questions

1. Difference between dot notation and bracket notation?
2. Difference between `Object.freeze()` and `Object.seal()`?
3. Difference between shallow copy and deep copy?
4. What is `this` in an object method?
5. What is the difference between an object and an array?
6. What are getters and setters?
7. What is a prototype?
8. How do `Object.keys()`, `Object.values()`, and `Object.entries()` differ?
9. What does `structuredClone()` do?
10. What is the difference between `JSON.stringify()` and `JSON.parse()`?

---

# Real-World MERN Example

```javascript
const user = {
    _id: "68712abc123",
    name: "Ankit",
    email: "ankit@example.com",
    role: "admin",
    isVerified: true,
    skills: ["React", "Node.js", "MongoDB"],
    address: {
        city: "Delhi",
        state: "Delhi",
        pinCode: "110084"
    },
    login() {
        console.log(`${this.name} logged in`);
    }
};

console.log(user.name);              // Ankit
console.log(user.skills[0]);         // React
console.log(user.address.city);      // Delhi
user.login();                        // Ankit logged in
```

## Practice Questions

1. Create an object for a student with 5 properties.
2. Add a new property `college`.
3. Update the student's age.
4. Delete the `city` property.
5. Print all keys using `Object.keys()`.
6. Print all values using `Object.values()`.
7. Loop through the object using `for...in`.
8. Create a nested object for `address`.
9. Add a `greet()` method that prints the student's name.
10. Make a deep copy and verify that changes to the copy do not affect the original.

If you're preparing for **MERN stack interviews**, these object concepts are essential because they appear in React props/state, Express request/response objects, MongoDB documents, JSON APIs, and JavaScript coding interviews.
