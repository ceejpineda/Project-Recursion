const fibsRec = (n, base=[0,1]) =>{
    if(base.length >= n){
        return base;
    }else{
        return fibsRec(n, [...base, base[base.length-2] + base[base.length-1]]);
    }

}

console.log(fibsRec(3))
console.log(fibsRec(4))
console.log(fibsRec(8))
