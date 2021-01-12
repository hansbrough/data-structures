const createNode = (value) => {
  return {
    value,
    next:null
  }
}

const createLinkedList = () => {
  return {
    head: null,
    tail: null,
    length: 0,
    print() {
      const values = []
      let current = this.head
      while (current) {
        values.push(current.value)
        current = current.next
      }
      return values.join(' => ')
    },
    pop() {
      console.log("pop this:",this)
      // usecase 1: empty list
      if(this.isEmpty()){
        return null;
      }

      const node = this.tail;
      // usecase 2: single item list
      if(this.tail === this.head) {
        this.tail = null;
        this.head = null;
        this.length = 0;
        return node;
      }
      // usecase 3: multi-item list
      let current = this.head;
      let penultimate;
      while(current) {
        console.log("current:",current)
        if(current.next === this.tail) {
          console.log("...next === tail")
          penultimate = current;
          console.log("...penultimate:",penultimate)
          break
        }
        current = current.next;
      }

      penultimate.next = null;
      this.tail = penultimate;
      this.length--;

      return node;
    },
    push(value) {
      console.log("push");
      const node = createNode(value)

      if (this.head === null) {
        this.head = node
        this.tail = node
        //console.log("this.head === this.tail:",this.head === this.tail);//point to same reference in memory
        this.length++
        return node
      }

      // console.log("... node:",node);
      // console.log("... before tail:",this.tail);
      this.tail.next = node;//which also changes head (same object reference)
      //console.log("... before 2tail:",this.tail);
      this.tail = node;// tail bucket now set to newly created node.
      this.length++

      //console.log("...after: head:",this.head);
      //console.log("... after tail:",this.tail);
      return node
    },
    peek() {
      return this.tail;
    },
    isEmpty() {
      return this.length === 0;
    },
    get(idx){
      console.log("get:",idx);
      //out of bounds
      if(idx <0 || idx > this.length-1){
        return null;
      }
      //1. wants the head
      if(idx===0){
        return this.head;
      }
      //2. look for items after the head
      let current = this.head;
      let i = 0;
      while(i !== idx) {
        current = current.next;
        i++
      }
      return current;
    },
    delete(idx) {
      //out of bounds
      if(idx < 0 || idx > this.length -1) {
        return null
      }

      //1. deleting the current head
      if(idx === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return deleted;
      }
      //2. deleting items between the head and tail
      let current = this.head;
      let previous;
      let i = 0;
      // set 'current' to the node at idx
      while(i < idx) {
        i++
        previous = current;
        current = current.next;
      }

      const deleted = current;
      previous.next = current.next;//slices out the current node from list.
      //3. deleting tail
      if(previous.next === null) {
        this.tail = previous;
      }

      //finally
      this.length--
      return deleted;
    }
  }
}

export default createLinkedList;
