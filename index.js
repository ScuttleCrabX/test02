function numberOneTriangle (n = 4) {
    let a = " "
    for (i = 1; i <= n; i++){
        a += '* ';
        console.log(a);
    }
    console.log("_______");
}

let stTriangle= numberOneTriangle()
let ndTriangle= numberOneTriangle(2)

console.log(stTriangle);
console.log(ndTriangle);