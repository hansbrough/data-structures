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
