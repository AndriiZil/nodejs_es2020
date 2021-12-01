const myPromiseArray = [
    Promise.resolve('Success'),
    Promise.resolve(null),
    Promise.resolve(new Error('Error')),
];

Promise.allSettled(myPromiseArray)
    .then(console.log)
    .catch(console.error);

/**
 *
 * [
 *   { status: 'fulfilled', value: 'Success' },
 *   { status: 'fulfilled', value: null },
 *   {
 *     status: 'fulfilled',
 *     value: Error: Error
 *         at Object.<anonymous> (/home/andrii/Documents/github/es2020/05_promise_allSettled.js:4:21)
 *         at Module._compile (node:internal/modules/cjs/loader:1101:14)
 *         at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
 *         at Module.load (node:internal/modules/cjs/loader:981:32)
 *         at Function.Module._load (node:internal/modules/cjs/loader:822:12)
 *         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
 *         at node:internal/main/run_main_module:17:47
 *   }
 * ]
 */