let arr = [1,2,3,4,5,6,7,8,9];

// map
// let newArr = arr.map(item => item * 2);
// console.log(newArr);

// filter
// let filteredArr = arr.filter(item => item % 2 === 0);
// console.log(filteredArr);

// reduce

// polyfills ===================================================

// map
function double(x){
    return 2*x;
}

Array.prototype.myMap = function(cb) {
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
};

let newArr = arr.myMap(double);
console.log(newArr);


// filter
function isOdd(x){
    return x%2 != 0;
}

Array.prototype.myFilter = function(cb) {
    let ans = [];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i])){
            ans.push(arr[i]);
        }
    }
    return ans;
};

console.log(arr.myFilter(isOdd));
