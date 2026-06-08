//! Find all the players
const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
}

const playerCount = (data) => {
    if(data === null) {
        return {}
    } //Base case

    let countPlayer = {} 

    for(let player of data.name) {
        countPlayer[player] = (countPlayer[player] || 0) + 1
    }

    let nextPlayerCount = playerCount(data.next)
    for(let key in nextPlayerCount) {
        countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key]
    }

    return countPlayer
}
const res = playerCount(data)
console.log(res);
