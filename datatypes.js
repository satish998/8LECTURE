var l = 10;
comsole.log(typeof l);

var name = "satish";
console.log(typeof name);

var obj = {
    name: "scarpio",
    brand: "mahendra"
    obj2: {
        "color": "black",
        "model": "latest",
        "insurence": ["life", "medical", "body"]

    }
};
//adding new element to object
obj["type"] = "girl";
console.log(obj);
console.log(typeof obj);
console.log(obj.name);
console.log(object.keys(obj));
console.log(object.values(obj));
console.log(obj.obj2.color);

let array=[1,"satish",3.4];
console.log(array);
console.log(array[0]);

for(let index=0;index<array.length;index++){
    console.log(array[index]);
}


///sadowing in js
var a=100;{
    var a=10;
    b=20;
    c=30;
}
console.log(a,b,c);
//illegal shadowing
let d=20;
{
    var d=20;
}
console.log(d);