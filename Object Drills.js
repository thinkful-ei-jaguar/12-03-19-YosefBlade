var obj = {
    foo: 1, 
    bar: 2, 
    fum: 3,
    quux: 4,
    spam: 5
};

for (var prop in obj) {
    console.log(prop, obj[prop]);
}