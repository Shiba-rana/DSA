const testPromise = new Promise((res, rej) => {
    const result = 5 + 5
    if(result === 10) {
        res("Resolved")
    } else {
        rej("Rejected")
    }
})

testPromise.then( message => {
    console.log(message);  
}).catch( message => {
    console.log(message);
    
})