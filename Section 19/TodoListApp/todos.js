const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

let input = '';

while (input !== 'quit' && input !== 'q') {
    input = prompt('What would you like to do?');

    if (input === 'new') {
        const todo = prompt('Enter new todo');
        todos.push(todo);
        console.log(`${todo} added to list`);
    } else if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    } else if (input === 'delete') {
        const todoIndex = parseInt(prompt('Enter index of todo to delete'));
        if (!Number.isNaN(todoIndex)) {
            const deleted = todos.splice(todoIndex, 1);
            console.log(`${deleted} removed`);
        } else {
            console.log('Unknown index');
        }
    }
}
console.log('OK, YOU QUIT THE APP');