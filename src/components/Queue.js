import {React, useState, useEffect, useRef} from 'react';

const QueuePage = () => {
  const [queue, setQueue] = useState();
  const enqueueInput = useRef(null);

  useEffect(() => {
    console.log("queue:",queue);
  },[queue]);

  // define a Queue
  const createQueue = () => {
    const queue = [];
    return {
      enqueue(item) {
        return queue.unshift(item);
      },
      dequeue() {
        return queue.pop();
      },
      peek() {
        return queue[queue.length -1];
      },
      get length() {
        return queue.length;
      },
      isEmpty() {
        return queue.length === 0;
      }
    };
  }

  const handleEnqueueClick = () => {
    queue.enqueue(enqueueInput.current.value);
    enqueueInput.current.value = '';//cleanup ui
  }

  return (
    <main>
      <h2>Queue</h2>
      <h3>A FIFO structure</h3>
      <div>
        {!queue && (
          <>
          <p>Create a Queue</p>
          <button onClick={() => setQueue(createQueue)}>Create</button>
          </>
        )}
        {queue && (
          <>
          <button style={{marginRight:"1rem"}} onClick={() => console.log(queue.length)}>Log Queue Length</button>
          <button style={{marginRight:"1rem"}}  onClick={() => console.log(queue.peek())}>Log Queue Peek</button>
          <button onClick={() => console.log(queue.isEmpty())}>Log Queue isEmpty</button>

          <p>Manipulate Queue</p>
          <input ref={enqueueInput} />
          <button onClick={handleEnqueueClick} disabled={false}>Add</button>
          <button style={{display:"block", marginTop:"1rem"}} onClick={() => queue.dequeue()} disabled={false}>Remove</button>
          </>
        )}
      </div>
    </main>
  )
};

export default QueuePage;
