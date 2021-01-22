import {React, useState} from 'react';

const SortingPage = () => {
  const [mergeSortedResults, setMergeSortedResults] = useState();
  const [quickSortedResults, setQuickSortedResults] = useState();
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

  //quick Sort O(n log(n))
  const quickSort = (arr) => {
    console.log("quickSort:",arr);
    //base case
    if(arr.length < 2) return arr;
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];

    for(let i = 0;i<pivotIndex;i++){
      const currentItem = arr[i];
      if(currentItem < pivot){
        left.push(currentItem)
      }else{
        right.push(currentItem)
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  return (
    <main>
      <h2>Sorting Techniques</h2>
      <h3>Some faster than others</h3>

      <div>
        <h4>Merge Sort - O(n log(n))</h4>
        <p>Recursively breaks apart a given array into smaller and smaller halves. Performs sorting on small, sub arrays and merges them back together.</p>
        <p>Sample array used: [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]</p>
        <button onClick={() => setMergeSortedResults(mergeSort([10, 5, 6, 3, 2, 8, 9, 4, 7, 1]))}>Merge Sort</button>
        <p>{mergeSortedResults}</p>

        <h4>Quick Sort - O(n log(n))</h4>
        <p>Another recursive function. compares each array member to a 'pivot' and places in a left or right array if smaller or larger as compared to the pivot item.</p>
        <p>Sample array used: [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]</p>
        <button onClick={() => setQuickSortedResults(quickSort([10, 5, 6, 3, 2, 8, 9, 4, 7, 1]))}>Quick Sort</button>
        <p>{quickSortedResults}</p>
        <p></p>
      </div>
    </main>
  )
};

export default SortingPage;
