import React from 'react'
import LogOutButton from "../auth/Logout"

const Home = () => {
  return (
    <div>welcome {localStorage.getItem("name")}
     <LogOutButton/>
    </div>
  )
}

export default Home