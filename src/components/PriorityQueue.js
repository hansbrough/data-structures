import {React, useState, useRef} from 'react';
import createPriorityQueue from '../structures/priorityQueue';

const PriorityQueue = () => {
  const [queue, setQueue] = useState();
  const enqueueInput = useRef(null);

  const handleEnqueueClick = (e, isPriority=false) => {
    queue.enqueue(enqueueInput.current.value, isPriority);
    enqueueInput.current.value = '';//cleanup ui
  }

  return (
    <main>
      <h2>Priority Queue</h2>
      <h3>Two Queues - one more important than the other.</h3>
      <p>Whenever an item is in the high priority queue it will be the next item to to be dequeued (popped). The high priority item should also be returned by 'peek()'.</p>
      <div>
      {!queue && (
        <>
        <p><b>Create a Queue</b></p>
        <button onClick={() => setQueue(createPriorityQueue)}>Create a PriorityQueue</button>
        </>
      )}
      {queue && (
        <>
        <button style={{marginRight:"1rem"}} onClick={() => console.log(queue.length())}>Log Queue Length</button>
        <button style={{marginRight:"1rem"}}  onClick={() => console.log(queue.peek())}>Log Queue Peek</button>
        <button onClick={() => console.log(queue.isEmpty())}>Log Queue isEmpty</button>

        <p>Manipulate Queue</p>
        <input ref={enqueueInput} style={{marginRight:"1rem"}} />
        <button onClick={handleEnqueueClick} style={{marginRight:"1rem"}} disabled={false}>Add to Regular Queue</button>
        <button onClick={(e) => handleEnqueueClick(e,true)} disabled={false}>Add to High Priority Queue</button>
        <button style={{display:"block", marginTop:"1rem"}} onClick={() => console.log(queue.dequeue())} disabled={false}>Dequeue and log next item</button>
        </>
      )}
      </div>
    </main>
  );
};

export default PriorityQueue;
