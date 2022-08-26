import React from 'react';

import useStoneitySortHook2 from './useStonitySort2';

function App () {
  const [sortedState] = useStoneitySortHook2([4,13,8,9,7,1,6]);
  return (
    <div className="App">
      <h1>Stoneity Sort</h1>
      <h2>Sorted List</h2>
      <h3>{sortedState.join()}</h3>
    </div>
  );

}
export default App;