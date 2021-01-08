import createQueue from './queue';

const createPriorityQueue = () => {
  const highPriorityQueue = createQueue();
  const lowPriorityQueue = createQueue();

  return {
    enqueue(item, isPriority=false) {
      console.log("enqueue:",item, " ",isPriority)
      const queue = isPriority ? highPriorityQueue : lowPriorityQueue;
      queue.enqueue(item);
    },
    dequeue() {
      if(!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue()
      }
      return lowPriorityQueue.dequeue()
    },
    peek() {
      if(!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  };

};

export default createPriorityQueue;
