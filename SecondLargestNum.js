const arr =[10,3,6,1,7,9,2,99]

var FirstLarNum = -Infinity
var SecLarNum = -Infinity

for(let i=0; i<arr.length; i++){
    if(arr[i] > FirstLarNum){
        SecLarNum = FirstLarNum
        FirstLarNum = arr[i]
    }else if (arr[i] >SecLarNum) {
        SecLarNum = arr[i]
    }
}
console.log(SecLarNum)
