//write a function pow(x,n)that x in power n.

function pow(x,n){
    let num=x;
    for(let i=1; i<n ; i++)
    {
        // num*=n;
         x*=n;
    }
    console.log(x);
}
console.log(pow(4,3));
