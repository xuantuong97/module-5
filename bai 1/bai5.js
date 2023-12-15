let array1 = [4,5,6,3,2,1]
let indexNum = array1.find((number) => number > 3);
if(indexNum !== undefined){
    console.log(`The first element greater than 3 is ${indexNum}`)
}
else {
    console.log(`Not found`)
}