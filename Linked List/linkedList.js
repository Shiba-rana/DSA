class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at Head
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at Index
  insertAtIndex(index, data) {
    if (index < 0 || index > this.size) return "Invalid Index";

    if (index === 0) {
      this.insertAtHead(data);
      return;
    }

    let newNode = new Node(data);
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;

    this.size++;
  }

  // Print
  print() {
    let res = "";
    let temp = this.head;

    while (temp) {
      res += `${temp.data} --> `;
      temp = temp.next;
    }
    return res;
  }

  // Remove at Head
  removeAtHead() {
    if (this.isEmpty()) return "List is already empty";

    this.head = this.head.next;
  }

  // Remove element
  removeElement(data) {
    if (this.isEmpty()) return "List is already empty";

    let current = this.head;
    let prev = null 

    while(current) {
      if(current.data === data) {
        if(prev === null) {
          this.head = current.next
        } else {
          prev.next = current.next
        }
        return current.element
      }
      prev = current 
      current = prev.next
    }
  }

  // Search item
  searchElement(data) {
    let curr = this.head
    let index = 0

    while(curr) {
      if(curr.data === data) {
        return index
      }
      index++
      curr = curr.next
    }
    return -1
  }

  

  isEmpty() {
    return this.size === 0;
  }
}

let list = new LinkedList();

list.insertAtHead(43);
list.insertAtHead(50);
list.insertAtHead(34);
list.insertAtIndex(2, 46);
list.insertAtIndex(1, 48);
list.removeAtHead();
// list.removeElement(50)
list.searchElement(50)

console.log(list.print());
