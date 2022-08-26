import {useState} from 'react';

export default function useStonitySort2(array) {
  const [result] = useState([array]);

const sort = (array) => {
  if (array.length > 0) {
    const min = Math.min(...array);
    const index = array.indexOf(min);
    if(array.length%2===0) result.push(min);
    else result.unshift(min);
    array.splice(index, 1);
    sort(array);
  }  
}
const addNumber = (n) => {
  array.push(n)
}
addNumber(11)
sort(array);
return [result, addNumber];
}
