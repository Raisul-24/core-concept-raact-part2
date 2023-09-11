import { useEffect, useState } from "react"

export default function Users(){
        const [users, setUsers] =useState([]);

        useEffect(() =>{
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(res =>res.json())
                .then(data => setUsers(data))
        }, [])

        return(
                <div>
                        <h3>Users: {users.length}</h3>

                </div>
        )
}
/**
 1. declare a state to hold the data
 2. useEffect with callback and dependency array
 3. use fetch to load the data
 4. set loaded data to the state
 5. display data on the component
 */