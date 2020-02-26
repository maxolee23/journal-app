import React, { useState } from 'react'

export default function Login (props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUser = (e) => {
    setUsername(e.target.value)
}
const handlePassword = (e) => {
    setPassword(e.target.value)
}

const logIn = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user:{
            username: username,
            password: password
        }})
    })
    .then(res => res.json())
    .then(userInfo => {
        console.log(userInfo)
        localStorage.setItem("token", userInfo.token)
        if(userInfo.token){
            props.history.push('/home')
        }
    })
}

const signupBtn = (props) => {
    console.log('signup button clicked')
    console.log(username, password)
    console.log(props)
    // props.history.push('/signup')
}
    return(
        <div className="login">
    <div className="w-full max-w-md bg-gray-800" >
      <form onSubmit={(e) => logIn(e)} className=" bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="px-4 pb-4">
          <label htmlFor="username" className="text-sm block font-bold  pb-2">Username</label>
          <input type="username" name="username" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Enter your username" onChange={(e)=> handleUser(e)}/>
        </div>
        <div  className="px-4 pb-4">
          <label htmlFor="password" className="text-sm block font-bold pb-2">Password</label>
          <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" onChange={(e)=> handlePassword(e)}/>
        </div>
        <div className='login-btn'>
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign In</button>   
        </div>
        <br></br>
        <div className="signup-btn">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick = {() => signupBtn()}>Register</button>
        </div>
      </form>
    </div>
    </div>
    )
}