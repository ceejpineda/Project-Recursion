const mergeSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length/2)

    let arr1 = mergeSort(arr.slice(0,mid));
    let arr2 = mergeSort(arr.slice(mid, arr.length));
    return sort(arr1,arr2);
}

const sort = (arr1, arr2) => {
    let newArr = [] 

    while(arr1.length > 0 && arr2.length > 0){
        if(arr1[0] < arr2[0]){
            newArr.push(arr1[0]);
            arr1.shift();
        }else if(arr2[0] < arr1[0]){
            newArr.push(arr2[0])
            arr2.shift();
        }
    }

    while(arr1.length > 0){
        newArr.push(arr1[0]);
        arr1.shift()
    }
    while(arr2.length > 0){
        newArr.push(arr2[0]);
        arr2.shift();
    }

    return newArr
}

let arr = [9,8,7,6,5,4,3,2,1]
console.log(arr);
console.log(mergeSort(arr));