const arr = [11,3,6,10,7,9,2,99]

var FirstLarNum = -Infinity
var SecLarNum = -Infinity
// var ThirdLarNum = -Infinity

for(let i=0; i<arr.length; i++){
    if(arr[i] > FirstLarNum){
        ThirdLarNum = SecLarNum
        SecLarNum = FirstLarNum
        FirstLarNum = arr[i]
    } else if (arr[i] > SecLarNum) {
        SecLarNum = arr[i]
    }
    // else if(arr[i]>ThirdLarNum){
    //     ThirdLarNum = arr[i]
    // }
}

console.log(SecLarNum)
