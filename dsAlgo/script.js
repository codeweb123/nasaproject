//Dijkstra's Algo
class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }
  
  class WeightedGraph {
      constructor() {
          this.adjacencyList = {};
      }
      addVertex(vertex){
          if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
      }
      addEdge(vertex1,vertex2, weight){
          this.adjacencyList[vertex1].push({node:vertex2,weight});
          this.adjacencyList[vertex2].push({node:vertex1, weight});
      }
      Dijkstra(start, finish){
          const nodes = new PriorityQueue();
          const distances = {};
          const previous = {};
          let path = [] //to return at end
          let smallest;
          //build up initial state
          for(let vertex in this.adjacencyList){
              if(vertex === start){
                  distances[vertex] = 0;
                  nodes.enqueue(vertex, 0);
              } else {
                  distances[vertex] = Infinity;
                  nodes.enqueue(vertex, Infinity);
              }
              previous[vertex] = null;
          }
          // as long as there is something to visit
          while(nodes.values.length){
              smallest = nodes.dequeue().val;
              if(smallest === finish){
                  //WE ARE DONE
                  //BUILD UP PATH TO RETURN AT END
                  while(previous[smallest]){
                      path.push(smallest);
                      smallest = previous[smallest];
                  }
                  break;
              } 
              if(smallest || distances[smallest] !== Infinity){
                  for(let neighbor in this.adjacencyList[smallest]){
                      //find neighboring node
                      let nextNode = this.adjacencyList[smallest][neighbor];
                      //calculate new distance to neighboring node
                      let candidate = distances[smallest] + nextNode.weight;
                      let nextNeighbor = nextNode.node;
                      if(candidate < distances[nextNeighbor]){
                          //updating new smallest distance to neighbor
                          distances[nextNeighbor] = candidate;
                          //updating previous - How we got to neighbor
                          previous[nextNeighbor] = smallest;
                          //enqueue in priority queue with new priority
                          nodes.enqueue(nextNeighbor, candidate);
                      }
                  }
              }
          }
          return path.concat(smallest).reverse();     
      }
  }
  
  var graph = new WeightedGraph()
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  graph.addEdge("A","B", 4);
  graph.addEdge("A","C", 2);
  graph.addEdge("B","E", 3);
  graph.addEdge("C","D", 2);
  graph.addEdge("C","F", 4);
  graph.addEdge("D","E", 3);
  graph.addEdge("D","F", 1);
  graph.addEdge("E","F", 1);
  
  
  graph.Dijkstra("A", "E");
  
  // ["A", "C", "D", "F", "E"]

//
Reverse Solution

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
isPalindrome Solution

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
someRecursive Solution

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}
flatten Solution

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

function findMatch(long, short) {
    let count = 0
    for(var i = 0; i < long.length; i++) {
        for(var j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j])
            break
            if(j === short.length -1)
            count++
        }
    }
    return count
}
findMatch("loled", "lol")
