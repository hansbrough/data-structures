import {React, useState, useRef} from 'react';
import createLinkedList from '../structures/linkedList';

const LinkedListPage = () => {
  const [linkedList, setLinkedList] = useState();
  const pushInput = useRef(null);
  const getInput = useRef(null);
  const deleteInput = useRef(null);

  const handlePushClick = () => {
    linkedList.push(pushInput.current.value);
    pushInput.current.value = '';//cleanup ui
  };

  const handleGetClick = () => {
    const item = linkedList.get(parseInt(getInput.current.value, 10));
    getInput.current.value = '';
    return item;
  };

  const handleDeleteClick = () => {
    const item = linkedList.delete(parseInt(deleteInput.current.value, 10));
    deleteInput.current.value = '';
    return item;
  }

  return (
    <main>
      <h2>LinkedList</h2>
      <h3>A collection of items each with a pointer to the next one in the list.</h3>
      <p>Slow when searching for a given item. Unlike an Array, item nodes can easily be removed or added from a linked list without reorganizing the entire data structure.</p>

      <div style={{marginTop:"2rem"}}>
        {!linkedList && (
          <>
          <p>Create a LinkedList</p>
          <button onClick={() => setLinkedList(createLinkedList)}>Create</button>
          </>
        )}
        {linkedList && (
          <>
          <button style={{marginRight:"1rem"}} onClick={() => console.log(linkedList.length)}>Log linkedList Length</button>
          <button style={{marginRight:"1rem"}}  onClick={() => console.log(linkedList.peek())}>Log linkedList Peek</button>
          <button onClick={() => console.log(linkedList.isEmpty())}>Log linkedList isEmpty</button>

          <p>Manipulate LinkedList</p>
          <input ref={pushInput} />
          <button onClick={handlePushClick} disabled={false}>Add (push)</button>
          <button style={{display:"block", marginTop:"1rem"}} onClick={() => console.log(linkedList.pop())} disabled={false}>Remove (pop)</button>
          <p>GET</p>
          <input ref={getInput} />
          <button onClick={() => console.log(handleGetClick())} disabled={false}>get item at index</button>
          <p>DELETE</p>
          <input ref={deleteInput} />
          <button onClick={() => console.log(handleDeleteClick())} disabled={false}>delete item at index</button>
          <p>Print</p>
          <button style={{display:'block'}} onClick={() => console.log(linkedList.print())} disabled={false}>Print List</button>
          </>

        )}
      </div>
    </main>
  )
};

export default LinkedListPage;
