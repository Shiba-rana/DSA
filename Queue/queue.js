class Queue {
  constructor() {
    this.queue = [];
    
  }

  enqueue(data) {
    this.queue.push(data)
  }

  dequeue() {
    return this.isEmpty() ? null : this.queue.shift();
  }

  front() {
    return this.isEmpty() ? null : this.queue.at(0);
  }

  back() {
    return this.isEmpty() ? null : this.queue.at(-1);
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue);
console.log(queue.dequeue());
console.log(queue);


console.log(queue.front());
console.log(queue.back());

