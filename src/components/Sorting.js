import {React, useState} from 'react';

const SortingPage = () => {
  const [mergeSortedResults, setMergeSortedResults] = useState();
  //Merge Sort O(n log(n))
  const merge = (left=[], right=[]) => {
    console.log("merge left:",left," right:",right);
    const sorted = [];
    while(left.length && right.length){
      if(left[0]<= right[0]) {
        sorted.push(left.shift())
      } else {
        sorted.push(right.shift())
      }
    }
    const results = [...sorted, ...left, ...right];
    console.log("...results:",results);
    return results;
  };

  const mergeSort = (arr) => {
    console.log("mergeSort:",arr);
    if(arr.length < 2) return arr;
    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };

  return (
    <main>
      <h2>Sorting Techniques</h2>
      <h3>Some faster than others</h3>

      <div>
        <h4>Merge Sort - O(n log(n))</h4>
        <p>Recursively breaks apart a given array into smaller and smaller halves. Performs sorting on small, sub arrays and merges them back together.</p>
        <p>Sample array used: [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]</p>
        <button onClick={() => setMergeSortedResults(mergeSort([10, 5, 6, 3, 2, 8, 9, 4, 7, 1]))}>Sort</button>
        <p>{mergeSortedResults}</p>
      </div>
    </main>
  )
};

export default SortingPage;
