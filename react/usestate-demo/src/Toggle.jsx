import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [show, setShow] = useState(true);
  return (
    <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <p>this is visible text</p>}
        
    </div>
  )
}

export default Toggle