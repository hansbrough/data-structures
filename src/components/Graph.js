import {React, useState, useRef} from 'react';
import createGraph from '../structures/graph';

const GraphPage = () => {
  const [graph, setGraph] = useState();
  const pushNodeInput = useRef(null);
  const pushEdgeInput1 = useRef(null);
  const pushEdgeInput2 = useRef(null);
  const getInput = useRef(null);
  const bfsInput = useRef(null);
  const dfsInput = useRef(null);

  const handlePushNodeClick = () => {
    graph.addNode(pushNodeInput.current.value);
    pushNodeInput.current.value = '';//cleanup ui
  };

  const handlePushEdgeClick = () => {
    graph.addEdge(pushEdgeInput1.current.value, pushEdgeInput2.current.value);
    pushEdgeInput1.current.value = '';//cleanup ui
    pushEdgeInput2.current.value = '';
  };

  const handleGetNodeClick = () => {
    const item = graph.getNode(getInput.current.value);
    getInput.current.value = '';
    return item;
  };

  const handleBfsClick = () => {
    console.log("---BFS---");
    const nodeKey = bfsInput.current.value;
    graph.bfs(nodeKey, node => {
      console.log(node.key)
    });
  }
  const handleDfsClick = () => {
    console.log("---DFS---");
    const nodeKey = dfsInput.current.value;
    graph.dfs(nodeKey, node => {
      console.log(node.key)
    });
  }
/*--Example graph data for BFS example--*/
// const exampleNodes = ['a', 'b', 'c', 'd', 'e', 'f']
// const exampleEdges = [
//   ['a', 'b'],
//   ['a', 'e'],
//   ['a', 'f'],
//   ['b', 'd'],
//   ['b', 'e'],
//   ['c', 'b'],
//   ['d', 'c'],
//   ['d', 'e']
// ]

  return (
    <main>
      <h2>Graph</h2>
      <h3>A data structure comprised of a set of nodes and edges. Each node in a graph may point to any other node in the graph.</h3>
      <p>Useful for things like describing networks and creating related nonhierarchical data.</p>

      <div style={{marginTop:"2rem"}}>
        {!graph && (
          <>
          <p>Create a Graph</p>
          <button onClick={() => setGraph(createGraph)}>Create</button>
          </>
        )}
        {graph && (
          <>
          <p>Update Graph</p>
          <input ref={pushNodeInput} />
          <button onClick={handlePushNodeClick} disabled={false}>Add Node</button>
          <p>Add an edge between 2 node keys</p>
          <input placeholder="Node 1 key" ref={pushEdgeInput1} />
          <input placeholder="Node 2 key" ref={pushEdgeInput2} />
          <button onClick={handlePushEdgeClick} disabled={false}>Add Edge</button>

          <p>GET</p>
          <input ref={getInput} />
          <button onClick={() => console.log(handleGetNodeClick())} disabled={false}>get node w/key</button>

          <p>Print</p>
          <button style={{display:'block'}} onClick={() => console.log(graph.print())} disabled={false}>Print Nodes</button>

          <h4>Breadth First Search on Graph</h4>
          <p>An algorithm that starts at one node and visits neighboring nodes as widely as possible before going further down any other path.</p>
          <p>Enter a node key as a point from which to start a search</p>
          <input placeholder="Node key" ref={bfsInput} />
          <button onClick={handleBfsClick}>BFS</button> (see console)

          <h4>Depth First Search on Graph</h4>
          <p>An algorithm that starts at one node and uses recursion to travel as deeply down a path of neighboring nodes as possible, before coming back up and trying other paths.</p>
          <p>Enter a node key as a point from which to start a search</p>
          <input placeholder="Node key" ref={dfsInput} />
          <button onClick={handleDfsClick}>DFS</button> (see console)

          </>
        )}
      </div>
    </main>
  )
};

export default GraphPage;
