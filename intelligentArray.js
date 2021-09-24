let intelligentArray = [
        {a:1,b:2,c:3},
        {a:4,b:2,c:1},
        {a:3,b:7,c:9},
    ];
const sum = intelligentArray.reduce((x, y) => x.a + y.a, 0);
console.log(sum);
const avg = intelligentArray.reduce((x, y) => x.b + y.b, 0) / intelligentArray.length;
 console.log(avg);
const product = intelligentArray.reduce((x, y) => x.c * y.c, 0);
 console.log(product);
