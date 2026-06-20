function firstUniqChar(s) {
    let map = new Map()

    for(let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i]) === 1) return i
    }
    return -1
}
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("Shiva")); 
