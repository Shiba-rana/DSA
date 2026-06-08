function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(2)(3)(4))

//! 
const addTwo = num1 => num2 => num1 + num2
console.log(addTwo(2)(4 ))
