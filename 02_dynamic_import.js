// const { addNumbers } = require('./dynamicmodule.js');

async function f() {
    try {
        if (1) {
            const { addNumbers } = await import('./dynamicmodule');
            addNumbers(3, 4, 5);
        }
    } catch (err) {
        console.log(err);
    }
}

f().catch(console.error);
