class Node {
  val: number;
  next: Node | null = null;
  constructor(val: number);
  constructor(val: number, next: Node);
  constructor(val: number, next?: Node) {
    this.val = val;
    if (next) {
      this.next = next;
    } else {
      this.next = null;
    }
  }
}

/**
 * Fifo Linked List (Singly Linked List)
 */
export class Queue {
  private size: number = 0;
  private head: Node | null = null;
  private tail: Node | null = null;
  constructor() {}

  /**
   * This will always insert at tail
   */
  public push(val: number): void {
    const newNode: Node = new Node(val);
    //First Insertion
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  public getSize(): number {
    return this.size;
  }

  public printLinkedList() {
    if (this.size == 0) {
      console.log("Nothing to print");
    }
    let tempHead: Node = this.head!;
    for (let i = 0; i < this.size; i++) {
      console.log(tempHead.val);
      tempHead = tempHead.next!;
    }
  }
}
