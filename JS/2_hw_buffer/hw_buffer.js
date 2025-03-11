function createBuffer() {
    let buffer = '';
    let history = [];

    return function (command, ...args) {
        if (command === 'add') {
            buffer += args[0];
            history.push(args[0]);
        } 
        else if (command === 'clear') {
            buffer = '';
        } 
        else if (command === 'get') {
            const start = args[0] || 0;
            const end = args[1] || buffer.length;
            return buffer.slice(start, end);
        } 
        else if (command === 'history') {
            console.log(history.map((item, index) => `${index + 1}. ${item}`).join('\n'));
        } 
        else if (command === 'replace') {
            buffer = args[0];
            history.push(args[0]);
        } 
        else {
            console.log('Unknown command');
        }
    }
}

// Приклади використання:
const buffer1 = createBuffer();

buffer1('add', 'Bob');
buffer1('add', 'eats frog');
buffer1('history'); // '1. Bob \n 2. eats frog'
console.log(buffer1('get', 2, 5)); // 'bea'
buffer1('clear');
buffer1('history'); // '1. Bob \n 2. eats frog' (історія не видаляється)
console.log(buffer1('get', 2, 6)); // '' (у буфері порожньо)
buffer1('replace', 'new str');
console.log(buffer1('get', 2, 6)); // 'w st'
buffer1('history'); // '1. Bob \n 2. eats frog \n 3. new str'