debugger;

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node at end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Print the list
  print() {
    let current = this.head;
    let output = '';

    while (current) {
      output += current.value + ' -> ';
      current = current.next;
    }

    output += 'null';
    console.log(output);
  }

  // Delete a node by value
  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }
}

// Example usage
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print(); // 10 -> 20 -> 30 -> null

list.delete(20);

list.print(); // 10 -> 30 -> null
