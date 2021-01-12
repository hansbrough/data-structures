import {React, useState, useRef} from 'react';
import createStack from '../structures/stack';

const StackPage = () => {
  const [stack, setStack] = useState();
  const pushInput = useRef(null);

  const handlePushClick = () => {
    stack.push(pushInput.current.value);
    pushInput.current.value = '';//cleanup ui
  }

  return (
    <main>
      <h2>Stack</h2>
      <h3>A LIFO structure</h3>
      <p>A stack is a collection of items that obeys the principle of "last in, first out".</p>
      <p>The order in which you get on the plane in US Army Jumpschool is a real world example. Last in line to get on the plane means you sit nearest the front door and jump out first!</p>
      <div style={{marginTop:"2rem"}}>
        {!stack && (
          <>
          <p>Create a Stack</p>
          <button onClick={() => setStack(createStack)}>Create</button>
          </>
        )}
        {stack && (
          <>
          <button style={{marginRight:"1rem"}} onClick={() => console.log(stack.length)}>Log Stack Length</button>
          <button style={{marginRight:"1rem"}}  onClick={() => console.log(stack.peek())}>Log Stack Peek</button>
          <button onClick={() => console.log(stack.isEmpty())}>Log Stack isEmpty</button>

          <p>Manipulate Stack</p>
          <input ref={pushInput} />
          <button onClick={handlePushClick} disabled={false}>Add (push)</button>
          <button style={{display:"block", marginTop:"1rem"}} onClick={() => console.log(stack.pop())} disabled={false}>Remove (pop)</button>
          </>
        )}
      </div>
    </main>
  )
};

export default StackPage;
