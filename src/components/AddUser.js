import React, { useState } from 'react'

const AddUser = () => {
    const [showModal, setShowModal] = useState(false);

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [role,setRole] = useState("")
    const token = localStorage.getItem("jwt")

    // const [response,setResponse] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault()

        const user = {
            name: name,
            email: email,
            password: password,
            role: role
        }

        fetch('https://whispering-hollows-91695.herokuapp.com/users',{
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`

            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=> console.log(data.message))
        setShowModal(false)

        
    }

   



    return (
    <>
        <button type="button" className="inline-block my-3 px-6 py-2.5 bg-emerald-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => setShowModal(true)}
        >
        Add User
        </button>
        {showModal ? (
        <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                    Add New User
                    </h3>
                    <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                    </span>
                    </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form onSubmit={handleSubmit}>
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter User's Name" required/>

                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmailcom" required/>
                            
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required/>
                            
                            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Role</label>
                            <select value={role} onChange={(e)=> setRole(e.target.value)} id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option defaultChecked>Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 block w-full rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            // onClick={() => setShowModal(false)}
                            >
                            Create User
                            </button>
                            {/* <p>{response}</p> */}
                    </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    Close
                    </button>
                </div>
                </div>
            </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
    </>
    );
}

export default AddUser