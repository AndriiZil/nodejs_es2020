const x = { prop1: { prop2: 'prop2' }};

console.log(x?.prop1.prop2); // prop2

console.log(x.prop1?.prop2?.prop3); // undefined

console.log(x.prop2?.prop3); // undefined

console.log(x.prop3?.prop4?.prop5); // undefined

console.log(x.prop5?.func?.()); // undefined
