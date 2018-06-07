const dog = {
    name: 'John',
    bark() {
        console.log("woof, I'm", this.name + "!");
    }
}

console.log(dog.name);
dog.bark();
console.log(dog);

console.log('*------------------------*');

const thisYear = 2018;
const person = {
    firstName: 'KK',
    lastName: 'Ling',
    name() {
        return this.firstName + ' ' + this.lastName;
    },
    birthYear: 2008,
    ageThisYear() {
        return thisYear - this.birthYear;
    },
}
console.log('person name is', person.name());
console.log('person age is', person.ageThisYear());

console.log('*------------------------*');

var someString = 'ABC';
console.log(someString.length);
someString.length = 200;
console.log(someString.length);
console.log('someString is', someString);

console.log('someString.toLowerCase():', someString.toLowerCase());
console.log("someString.replace('b', 'z'):", someString.replace('b', 'z'));
console.log('someString.replace("B","z"):', someString.replace("B", "z"));

console.log('*------------------------*');

var decimalNumber = 10.338899;
console.log('toFixed(3):', decimalNumber.toFixed(3));

console.log('*------------------------*');

const sum = (num1, num2) => num1 + num2;
console.log('sum(1,2) is', sum(1,2));
console.log('sum.name is', sum.name);
console.log('sum.toString() and sum are');
console.log('   ', sum.toString());
console.log('   ', sum);
// console.log(sum.toString);   //not calling method "toString()" from object "sum", same as console.log(toString)
// console.log(toString);