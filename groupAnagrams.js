function groupAnagrams(strs) {
    let anagrams = {}
    for(let i = 0; i < strs.length; i++) {
        const str = strs[i].split("").sort().join("")

        if(!anagrams.hasOwnProperty(str)) {
            anagrams[str] = []
        }
        anagrams[str] = [...anagrams[str], strs[i]]
    }
    let res = []
    for (let key in anagrams) {
        res.push(anagrams[key])
    }
    return res
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
