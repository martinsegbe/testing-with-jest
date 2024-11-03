const stack = require('../src/stack');

test('push adds an element to the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10); // Kontrollerar att det översta elementet är 10
});
