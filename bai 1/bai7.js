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

array1.forEach(({ name, age }) => {
    console.log(name);
    console.log(age);
});
