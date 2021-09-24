let sortObject = [
    {a: 1, b: 2, c:3},
    {a: 4, b: 2, c:1},
    {a: 3, b: 7, c:9}
];
sortObject.sort(function (x, y) {
    return x.a- y.a;
});
console.table(sortObject);
