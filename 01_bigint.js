let oldNum = Number.MAX_SAFE_INTEGER;

console.log(oldNum); // 9007199254740991
console.log(typeof oldNum); // number

console.log(++oldNum); // 9007199254740992
console.log(++oldNum); // 9007199254740992
console.log(++oldNum); // 9007199254740992

console.log(BigInt(10)); // 10n
console.log(BigInt(oldNum)); // 9007199254740992n
