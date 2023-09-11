import { useState } from "react"

export default function Counter(){
        const [count,setCount] = useState(0);
        // console.log(abc)

        const handleAdd =() =>{
                const newCount = count + 1;
                setCount(newCount);
        }
        const handleReduce = () =>{
                const newCount = count-1;
                setCount(newCount)
        }
        return (
                <div style={{border: '2px solid red',
                padding:'5px'}}>
                        <h3>Counter: {count}</h3>
                        <button onClick={handleAdd}>ADD</button>
                        <button onClick={handleReduce}>REDUCE</button>
                </div>
        )
}