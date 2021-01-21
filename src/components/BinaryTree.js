import {React, useState} from 'react';
import createBinaryTree from '../structures/binaryTree';

const BinaryTreePage = () => {
  const [inOrderResult, setInOrderResult] = useState();
  const [preOrderResult, setPreOrderResult] = useState();
  const [postOrderResult, setPostOrderResult] = useState();


  const tree = createBinaryTree('a')
  const b = tree.root.addLeft('b')
  const c = tree.root.addRight('c')
  const d = b.addLeft('d')
  const e = b.addRight('e')
  const f = c.addLeft('f')
  const g = c.addRight('g')
  const h = d.addLeft('h')
  const i = d.addRight('i')

  return (
    <main>
      <h2>Binary Tree</h2>
      <h3>A tree where each node may only have up to two children.</h3>
      <p>These children are stored on the left and right properties of each node.</p>

      <div style={{marginTop:"2rem"}}>
        <>
        <p>Print </p>
        <div style={{border:"1px solid gray", margin:'1rem', padding:".5rem"}}>
          <button onClick={() => setInOrderResult(tree.print())}>Print "IN_ORDER" Traversal</button>
          <p>Go all the way down left side of tree to 'h', then back out to 'd', the right side of 'd' which is 'i'. Back out one level to 'b' then to the right side child 'e' etc.</p>
          <p>{inOrderResult}</p>
        </div>

        <div style={{border:"1px solid gray", margin:'1rem', padding:".5rem"}}>
          <button onClick={() => setPreOrderResult(tree.print('PRE_ORDER'))}>Print "PRE_ORDER" Traversal</button>
          <p>{preOrderResult}</p>
        </div>

        <div style={{border:"1px solid gray", margin:'1rem', padding:".5rem"}}>
          <button onClick={() => setPostOrderResult(tree.print('POST_ORDER'))}>Print "POST_ORDER" Traversal</button>
          <p>{postOrderResult}</p>
        </div>
        </>
      </div>
    </main>
  )
};

export default BinaryTreePage;
