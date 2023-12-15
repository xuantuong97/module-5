let array1 = [
    {
        name: 'tuong',
        age: 26
    },
    {
        name: 'hung',
        age: 24
    }
]

let names = array1.map(({name}) => name);
let ages = array1.map(({age}) => age);
console.log(names);
console.log(ages);