// `this` keyword in JavaScript refers to the current context or 
// scope within which code is executing. Its values is determining
// by how a function is called, and it can dynamically change.

// 1. USING 'this' IN A METHOD :

const person = {
    name: 'Rovid',
    age: 30,
    greet() {
        console.log('Hello, My name is ' + this.name + ' and I am ' 
            + this.age + ' years old.');
    }
};

person.greet(); // Output: Hello, My name is Rovid and I am 30 years old.
// In this Context, 'this' refers to the object itself.

// 2. USING 'this' IN A FUNCTION :

function greet2() {
    console.log('Hello, My Name is ' + this.name2);
}

const person2 = {
    name2: 'Rovid',
    sayHello: greet2
};

const anotherPerson = {
    name2: 'Kashyap'
};

greet2();                       // Hello, My name is undefined
person2.sayHello();             // Hello, My name is Rovid
greet2.call(anotherPerson);     // Hello, My name is Kashyap

// greet2() - When greet2() is called directly, this referes to the global
// object or undefined. since function invoked without explicit content.

// person2.sayHello() - when sayHello() is called as method of person2 
// object, this refers to the person2 object itself, allowing access to the
// name property.

// greet2.call(anotherPerson) - The call method is used explicitly specify
// the context for this. When greet2.call(anotherPerson) is called, this
// refers to the anotherPerson object, allowing access to its name property.

// 3. IMPLICIT BINDING :

const myPerson = {
    myName: 'Rovid',
    myAge: 30,
    myGreet: function() {
        return `Hello ${this.myName}, you are ${this.myAge} years old`
    }
}
console.log(myPerson.myGreet());    // Hello Rovid, you are 30 years old

// Here 'this' keyword refers to the person object so it can access name
// and age property.

// 4. EXPLICITLY BINDING :

function ageVerify() {
    if (this.age > 18) {
        console.log('Yes you can drive');
    } else {
        console.log('No you cannot drive');
    }
}

const per1 = {age: 21};
const per2 = {age: 16};
ageVerify.call(per1);       // Yes you can drive
ageVerify.call(per2);       // No you cannot drive

// When we explicitly bind this keyword using the call(), bind(), or apply()
// method then this keyword default reference is changed to the object called
// using the above-specified methods.

// 5. ARROW FUNCTION BINDING :

const person3 = {
    name3: 'Rovid',
    age3: 31,
    greet3: () => {
        return `Hello, you are ${this.age3} years old`
    }
}
console.log(person3.greet3()); // Hello, you are undefined years old.

// When this is used in the arrow function then this has lexical scope
// so without the function keyword this is unable to refer to the object
// in the outer scope.