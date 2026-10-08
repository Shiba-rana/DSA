var removeOuterParentheses = function(s) {
    const result = [];
    let opened = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === '(') {
            // If opened > 0, this '(' is inside a primitive block
            if (opened > 0) {
                result.push(char);
            }
            opened++;
        } else {
            opened--;
            // If opened > 0 after decrementing, this ')' is inside a primitive block
            if (opened > 0) {
                result.push(char);
            }
        }
    }
    
    return result.join('');
};
