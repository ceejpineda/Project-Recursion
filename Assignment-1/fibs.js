let fibs = (count) =>{
    let fib = [0,1];
    for(let i=1; i<count-1; i++){
        fib.push(fib[i]+fib[i-1])
    }
    return fib;
}


console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(8));