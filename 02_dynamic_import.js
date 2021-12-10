// const { addNumbers } = require('./dynamicmodule.js');

async function f() {
    try {
        if (1) {
            const { addNumbers } = await require('./dynamicmodule');
            console.log(addNumbers(3, 4, 5)); // 12
        }
    } catch (err) {
        console.log(err);
    }
}

f().catch(console.error);
