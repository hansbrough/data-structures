import createQueue from "./queue";//imported for breadth first search method

function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  }
}

function createGraph(directed=false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find(n => n.key === key);
    },
    addEdge(key1, key2) {
      const node1 = this.getNode(key1);
      const node2 = this.getNode(key2);

      node1.addNeighbor(node2);
      edges.push(`${key1}-${key2}`);

      if(!directed) {
        node2.addNeighbor(node1);
      }
    },
    bfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      //hash to track what nodes have been visited.
      const visitedHash = nodes.reduce((acc, cur) => {
        acc[cur.key] = false
        return acc
      }, {})
      //list of nodes currently waiting to be visited.
      const queue = createQueue()
      queue.enqueue(startingNode)

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue()
        //check hash to make sure node not previously visited
        if (!visitedHash[currentNode.key]) {
          visitFn(currentNode)
          visitedHash[currentNode.key] = true
        }
        //adding current node's neighbors to queue if they have not already been visited.
        currentNode.neighbors.forEach(node => {
          if (!visitedHash[node.key]) {
            queue.enqueue(node)
          }
        })
      }
    },
    dfs(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      //hash to track what has been previously visitedHash
      const visitedHash = nodes.reduce((acc, cur) => {
        acc[cur.key] = false;
        return acc;
      },{});
      //called recursively until max depth reached. 
      const explore = (node) => {
        if(visitedHash[node.key]){
          return
        }
        visitFn(node)
        visitedHash[node.key] = true;
        node.neighbors.forEach(item => {
          explore(item)
        })
      }
      explore(startingNode)
    },
    print(){
      return nodes.map(({key, neighbors}) => {
        let result = key;
        if(neighbors.length) {
          result += ` => ${neighbors.map(neighbor => neighbor.key).join(' ')}`
        }
        return result;
      }).join('\n')
    }
  }
}

export default createGraph;
