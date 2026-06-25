function isValid(s) {
    const obj = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }

    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(obj.hasOwnProperty(s[i])) {
            stack.push(s[i])
        } else {
            if(stack.length === 0 || obj[stack.at(-1)] !== s[i]) return false

            stack.pop()
        }
    }
    return stack.length === 0
}

console.log(isValid("()}"));
console.log(isValid("()"));
console.log(isValid("[{()}]"));
