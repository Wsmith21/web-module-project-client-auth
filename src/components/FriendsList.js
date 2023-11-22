import axios from "axios";
import React, { useEffect, useState } from "react"



const FriendsList =()=>{
    const token = localStorage.getItem("token")
    const [friends, setFriends] =useState([]);
        useEffect(() =>{
            axios.get('http://localhost:9000/api/friends', {
                headers: {
                    authenticator: token
                }
            })
            .then(resp=>{
                setFriends(resp.data);
               
            })
            .catch(err=>{
                console.log(err)
            })
        })
    return (
    <div>
        <h2>FriendsList</h2>
        <ul>
            {
                friends.map(friend=>{
                    return <li>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }
            
        </ul>
    </div>)
  }


  export default FriendsList;