class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.push(x);

        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
    }

    pop() {
        if (this.empty()) return null;
        return this.stack1.pop();
    }

    peek() {
        return this.empty() ? null : this.stack1.at(-1);
    }

    empty() {
        return this.stack1.length === 0;
    }
}

const queue = new MyQueue();

console.log(queue.empty());

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue);

console.log(queue.peek()); 
console.log(queue.pop());  
console.log(queue.peek()); 

queue.push(4);

console.log(queue.pop());  
console.log(queue.pop());   
console.log(queue.pop());   
console.log(queue.empty()); 