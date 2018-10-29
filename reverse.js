'use strict';

// -------------------------------------------------------------------
// relevant classes to perform functions
// -------------------------------------------------------------------

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop();
  }
  isEmpty() {
    if (this.stack.length = 0) {
      return true;
    }
    return false;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }
  append(node) { // T: O(N) S: O(1);
    let traverse = this.head;
    while (traverse.next !== null) {
      traverse = traverse.next;
    }
    traverse.next = node;
  }
  insertAtHead(node) { // T: O(1) S:0(1)
    let earlyHead = this.head;
    this.head = node;
    node.next = earlyHead;
  }
}

// let link = new LinkedList(new Node(0));

// -------------------------------------------------------------------
// Reversal Functions
// -------------------------------------------------------------------

// T: O(N) S: O(1)
// pro: best respect to time
// con: doesn't return a new list
const traditional = list => {
  let next = null;
  let previous = null;
  let node = list.head;
  while(node.next !== null) {
    next = node.next
    node.next = previous;
    previous = node;
    node = next;
  }
  list.head = node;
  return list;
}

// T: O(N) S: O(N)
// pro: 
// con: 
const recursive = list => {
  let next = null;
  let previous = null; 
  let node = list.head;
  (function recurse(head) {
    if (node.next !== null) {
      return undefined;
    }
    next = node.next
    node.next = previous;
    previous = node;
    recurse(next);
  }(node));
  list.head = node;
  return list;
}

// T: O(N^2) S: O(N)
// pro: returns a new list
// con: is an array
const arrays = list => {
  let array = [];
  let node = list.head;
  while(node.next !== null) {
    array.push(node.value);
    node = node.next;
  }
  let newList = new LinkedList(array.pop());
  while(array.length !== 0) {
    newList.append(array.pop());
  }
  return newList;
}

// t: O(N^2) S: O(N)
// pro: returns a new list, is a stack
// con: N space
const stacks = list => {
  let stack = new Stack();
  let node = list.head;
  while (node.next !== null) {
    stack.push(node.value);
    node = node.next;
  }
  let newList = new LinkedList(stack.pop());
  while (!stack.isEmpty()) {
    newList.append(stack.pop());
  }
  return newList;
}
