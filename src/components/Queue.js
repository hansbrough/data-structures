import {React, useState, useRef} from 'react';
import createQueue from '../structures/queue';

const QueuePage = () => {
  const [queue, setQueue] = useState();
  const enqueueInput = useRef(null);

  const handleEnqueueClick = () => {
    queue.enqueue(enqueueInput.current.value);
    enqueueInput.current.value = '';//cleanup ui
  }

  return (
    <main>
      <h2>Queue</h2>
      <h3>A FIFO structure</h3>
      <p>A "queue" is a collection of items that obeys the principle of "first in, first out".</p>
      <div>
        {!queue && (
          <>
          <p><b>Create a Queue</b></p>
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
          <button onClick={handleEnqueueClick} disabled={false}>Add (enqueue)</button>
          <button style={{display:"block", marginTop:"1rem"}} onClick={() => console.log(queue.dequeue())} disabled={false}>Remove (dequeue)</button>
          </>
        )}
      </div>
    </main>
  )
};

export default QueuePage;
