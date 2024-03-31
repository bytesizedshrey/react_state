import {useState} from 'react';

export default function App(){
    const [count, setCount] = useState((0));
    const [otherCount, setOtherCount] = useState(5);

  return (
    <>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
    <p>Count: {count}</p>

    <button onClick={() => setOtherCount(otherCount + 1)}>
      Increment
    </button>
    <p>Other Count: {otherCount}</p>
    </>
  )
};