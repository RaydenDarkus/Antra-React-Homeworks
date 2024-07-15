// Explain what is proptotype and prototype chain in your own words.
// Prototypes in JavaScript are objects that are used to share properties and methods between objects. 
// We can add new methods or new properties to the object constructors using the prototype property.
// Objects in JavaScript can inherit properties and methods from other objects using the prototype chain. Eg: -
const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
};
function Person(name) {
    this.name = name;
}
// Set the prototype of Person to personPrototype
Person.prototype = personPrototype;
// Create an instance of Person
const person1 = new Person('Alice');
person1.greet(); // Output: hello, my name is Alice!
// In the above example, the person1 object inherits the greet method from the personPrototype object using the prototype chain.

// Implement your versions of the following Array methods: (Choose 6)
// map, filter, reduce, every, find, includes, slice, push, pop, sort, reverse, join. 

// push
Array.prototype.myPush = function(...args) {
    const length = this.length;
    for (let i = 0; i < args.length; i++) {
        this[length + i] = args[i];
    }
    return this.length;
};
let arr = [1, 2, 3];
arr.myPush(4, 5, 6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// pop
Array.prototype.myPop = function() {
    const length = this.length;
    if (length === 0) {
        return undefined;
    }
    else {
        const lastElement = this[length - 1];
        this.length = length - 1;
        return lastElement;
    }
};
arr = [1, 2, 3];
arr.myPop();
console.log(arr); // Output: [1, 2]

// reverse
Array.prototype.myReverse = function() {
    const length = this.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = this[i];
        this[i] = this[length - 1 - i];
        this[length - 1 - i] = temp;
    }
    return this;
};
arr = [1, 2, 3];
arr.myReverse();
console.log(arr); // Output: [3, 2, 1]

//sort 
Array.prototype.mySort = function() {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                const temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
};
arr = [3, 1, 2];
arr.mySort(); // Output: [1, 2, 3]
console.log(arr);

// join
Array.prototype.myJoin = function(separator = ',') {
    let str = '';
    for (let i = 0; i < this.length; i++) {
        str += this[i];
        if (i < this.length - 1) {
            str += separator;
        }
    }
    return str;
};
arr = ['a', 'b', 'c'];
const joined = arr.myJoin('');
console.log(joined); // Output: abc

// map
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

arr = [1, 2, 3, 4, 5];
const mappedArr = arr.myMap(num => num * 3);
console.log(mappedArr); // Output: [3, 6, 9, 12, 15]

// filter
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};
arr = [1, 2, 3, 4, 5];
const filteredArr = arr.myFilter(num => num > 3);
console.log(filteredArr); // Output: [4, 5]

// reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}
arr = [1, 2, 3, 4, 5];
const sum = arr.myReduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15