class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = null
  }

  enqueue(data) {
    const newNode = new Node(data)

    if(this.head === null) {
        this.head = newNode

    } else {
        this.tail.next = newNode
    }

    this.tail = newNode
    this.size++
  }

  dequeue() {
    if(this.isEmpty()) {
        return null
    }

    const deletedData = this.head.data
    this.head = this.head.next
    this.size--
    return deletedData
  }

  front() {
    return this.isEmpty() ? null : this.head.data;
  }

  back() {
    return this.isEmpty() ? null : this.tail.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const queue = new QueueLinkedList()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue);


console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue);



console.log(queue.front())
console.log(queue.back())
console.log(queue.isEmpty())