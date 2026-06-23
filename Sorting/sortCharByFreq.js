function frequencySort(str) {
    let map = new Map()
    for(let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    const sortedMap = [...map.keys()].sort((a,b) => map.get(b) - map.get(a))

    let resultStr = ''
    for(let ch of sortedMap) {
        resultStr += ch.repeat(map.get(ch))
    }

    return resultStr
}

console.log(frequencySort("eert"));
