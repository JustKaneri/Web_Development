import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = new useState(0);

    function Add(){
        setCount(count+1);
      }
    
      function Del(){
        setCount(count-1);
      }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Add}>Add</button>
            <button onClick={Del}>Del</button>
        </div>
    )
};

export default Counter;
