import {React} from 'react';
import createTree from '../structures/tree';

const TreePage = () => {

  const tree = createTree('html');
  const head = tree.root.addChild('head')
  const body = tree.root.addChild('body')
  const title = head.addChild('title - egghead Tree Lesson')
  const header = body.addChild('header')
  const main = body.addChild('main')
  const footer = body.addChild('footer')
  const h1 = header.addChild('h1 - Tree Lesson')
  const p = main.addChild('p - Learn about trees!')
  const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`)

  return (
    <main>
      <h2>Tree</h2>
      <h3>A tree is a special type of graph - a collection of hierarchical nodes.</h3>
      <p>Nodes in a tree structure have children rather than neighbors as in a graph.</p>

      <div style={{marginTop:"2rem"}}>
        <>
        <p>Print</p>
        <button style={{display:'block'}} onClick={() => console.log(tree.print())}>Print Nodes (to console)</button>
        </>
      </div>
    </main>
  )
};

export default TreePage;
