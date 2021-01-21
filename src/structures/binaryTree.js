
const createBinaryNode = function(key) {
  return {
    key,
    left:null,
    right:null,
    addLeft(leftKey){
      const newLeft = createBinaryNode(leftKey);
      this.left = newLeft;
      return newLeft
    },
    addRight(rightKey){
      const newRight = createBinaryNode(rightKey);
      this.right = newRight;
      return newRight;
    }
  }

}

const createBinaryTree = function(key) {
  const root = createBinaryNode(key);
  return {
    root,
    print(orderType = 'IN_ORDER') {
      let result = '';
      //what to do with the node
      const visitFn = node => {
        result += result.length ? ` => ${node.key}`: node.key
      }

      TRAVERSALS[orderType](this.root, visitFn);
      return result;
    }
  }
}

const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if(node){
      TRAVERSALS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if(node){
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left, visitFn);
      TRAVERSALS.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (node, visitFn) => {
    if(node){
      TRAVERSALS.POST_ORDER(node.left, visitFn);
      TRAVERSALS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  },
}

export default createBinaryTree;
