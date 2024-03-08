import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data=> setFriends(data))
    } ,[])

    const friendsStyle = {
        padding: '15px',
        border: '2px solid tomato',
        margin: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={friendsStyle}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}