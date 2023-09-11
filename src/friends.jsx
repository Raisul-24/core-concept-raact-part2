import Friend from './Friend';
import './friends.css'
import { useEffect, useState } from "react"

export default function Friends(){
        const [user,setUser] = useState([]);


        useEffect(() =>{
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(res=>res.json())
                .then(data => setUser(data))
        },[])

        return(
                <div className='box'>
                        <h3>Friends : {user.length}</h3>
                        {
                                user.map(friend =>
                                <Friend
                                friend ={friend}></Friend>)
                        }

                </div>
        )
}