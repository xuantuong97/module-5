let array1 = [2,4,5,7,8]
let V = 1;
let containV = array1.some((x) => x === V)
if(containV){
    console.log(`Mảng có chứa ${V}`)
}
else {
    console.log(`Mảng không chứa ${V}`)
}