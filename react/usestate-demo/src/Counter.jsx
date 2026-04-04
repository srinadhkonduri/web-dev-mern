import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>you clicked {count} times</h1>
        <button style={{margin : "1rem"}} onClick={() => setCount(count+1)}>Increase By 1</button>
        <button style={{margin : "1rem"}}  onClick={() => setCount(count-1)}>Decrease By 1</button>
        <button style={{margin : "1rem"}} onClick={() => setCount(count+10)}>Increase by 10</button>
        <button style={{margin : "1rem"}} onClick={() => setCount(count-10)}>Decrease by 10</button>
        <button style={{margin : "1rem"}} onClick={() => setCount(count)}>reset</button>
    </div>
  )
}

export default Counter