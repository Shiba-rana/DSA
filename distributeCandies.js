function disCandies(candyType) {
    const uniqueTypes = new Set(candyType).size;
    return Math.min(uniqueTypes, candyType.length / 2);
}
console.log(disCandies([1,1,2,2,3,3]));
