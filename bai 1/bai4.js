let array1 = [2,0,5,7,8];
let containV = array1.every((x) => x > 0)
if(containV){
    console.log(`Tất cả các phần tử trong mảng đều lớn hơn 0`)
}
else {
    console.log(`Mảng không đạt yêu cầu`)
}