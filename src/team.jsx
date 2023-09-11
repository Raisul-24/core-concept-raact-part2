import { useState } from "react"

export default function Team(){
        const [count,setCount] =useState(11);

        const handleAdd = () =>{
                const newCount = count+1;
                setCount(newCount);
        }
        const handleReduce = () =>{
                const newCount = count-1;
                setCount(newCount);
        }
        const teamStyle={
                border: '5px dashed green',
                padding:'5px',
                margin: '5px',
                borderRadius:'10px'
        }
        return(
                <div style={teamStyle}>
                        <h3>Player: {count}</h3>
                        <button onClick={handleAdd}>Add</button>
                        <button onClick={handleReduce}>Reduce</button>
                </div>
        )
}