class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class stackLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }

  pop() {
    if(this.isEmpty()) {
        return "List is already empty"
    }

    const item = this.head.data
    this.head = this.head.next
    this.size--
    return item
  }

  peek() {
  if (this.isEmpty()) {
    return "List is empty";
  }

  return this.head.data;
}

  isEmpty() {
    return this.size === 0
  }
}

const stack = new stackLinkedList()

stack.push(10)
stack.push(12)
stack.push(14)

console.log(stack);

