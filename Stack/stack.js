class Stack{
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    pop() {
        if(this.isEmpty()) {
            return null
        }
        return this.stack.pop()
    }

    peek() {
        if(this.isEmpty()) {
            return null
        }
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }
}

const stack = new Stack()
stack.push(20)
stack.push(40)
stack.push(50)
stack.push(70)
stack.push(90)
stack.pop()

console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());






