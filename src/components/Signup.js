import React, { useState } from 'react';

export default function Signup (props) {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const handleUser = (e) => {
    setUsername(e.target.value)
}
const handlePassword = (e) => {
    setPassword(e.target.value)
}
const signUp = (e) => { 
            e.preventDefault()
            console.log(e)
            fetch('http://localhost:3000/api/v1/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "user": {
                        username: username,
                        password: password
                    }
                })
            }, props.history.push('/login'))      
        }
return(
    <div className="signup">
                     <h1>Register</h1>
     <div className="w-full max-w-md bg-gray-800" >
       <form onSubmit={(e) => signUp(e)} className=" bg-white shadow-md rounded px-8 py-8 pt-8">
         <div className="px-4 pb-4">
          <label htmlFor="username" className="text-sm block font-bold  pb-2">Username</label>
          <input type="username" name="username" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Enter your username" onChange={(e) => handleUser(e)}/>
        </div>
        <div  className="px-4 pb-4">
         <label htmlFor="password" className="text-sm block font-bold pb-2">Password</label>
          <input type="password" name="password" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" onChange={(e) => handlePassword(e)}/>
        </div>
        <div>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register </button>
        </div>
       </form>
    </div>
    </div>
)
}
// }

// class Signup extends Component {

//     handleChange = (e) => {
//         this.setState({
//             [e.target.username] : e.target.value
//         })
//     }

//     signUp = (e) => { 
//         e.preventDefault()
//         console.log(e)
//         fetch('http://localhost:3000/api/v1/users', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 "user": {
//                     username: this.state.username,
//                     password: this.state.password
//                 }
//             })
//         }, this.props.history.push('/login'))      
//     }
   
// render() {
//     return(
//         <div className="signup">
//             <h1>Register</h1>
//     <div className="w-full max-w-md bg-gray-800" >
//       <form onSubmit={(e) => this.signUp(e)} className=" bg-white shadow-md rounded px-8 py-8 pt-8">
//         <div className="px-4 pb-4">
//           <label htmlFor="username" className="text-sm block font-bold  pb-2">Username</label>
//           <input type="username" name="username" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Enter your username" onChange={(e) => this.handleChange(e)}/>
//         </div>
//         <div  className="px-4 pb-4">
//           <label htmlFor="password" className="text-sm block font-bold pb-2">Password</label>
//           <input type="password" name="password" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" onChange={(e) => this.handleChange(e)}/>
//         </div>
//         <div>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onChange={(e) => this.handleChange(e)}>Sign Up</button>
//         </div>
//       </form>
//     </div>
//     </div>
//     )
// }
// }
