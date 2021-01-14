function createNode(key) {
  const children = [];

  return {
    key,
    children,
    addChild(childKey){
      const childNode = createNode(childKey);
      children.push(childNode);
      return childNode;
    }
  }
}

function createTree(rootKey) {
  const root = createNode(rootKey);
  return {
    root,
    print() {
      let result = '';

      // increments result for UI display
      function addKeyToResult(node, depth) {
        result += result.length === 0 ? node.key : `\n${' '.repeat(depth * 2)}${node.key}`
      }

      //recursive look through node tree
      function traverse(node, visitFn, depth) {
        visitFn(node, depth);
        if (node.children.length) {
          node.children.forEach(child => {// traverse each child node
            traverse(child, visitFn, depth+1)
          })
        }
      }

      traverse(root, addKeyToResult, 0);//start traversal at root
      return result;
    }
  }
}

export default createTree;
