const stack = require('../src/stack');

test('pop removes and returns the top element from the stack', () => {
    stack.push(20);
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(20); // Kontrollerar att det borttagna elementet är 20
    expect(stack.peek()).toBeUndefined(); // Kontrollerar att stacken nu är tom
});
