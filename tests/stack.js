// stack.test.js
const Stack = require('../stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('should initialize empty', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
    });

    test('should push elements onto the stack', () => {
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(1);
    });

    test('should pop elements from the stack', () => {
        stack.push(1);
        expect(stack.pop()).toBe(1);
        expect(stack.isEmpty()).toBe(true);
    });

    test('should return the top element without removing it', () => {
        stack.push(1);
        expect(stack.peek()).toBe(1);
        expect(stack.size()).toBe(1);
    });
});
