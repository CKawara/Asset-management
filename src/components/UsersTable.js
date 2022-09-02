import React, { useState, useEffect } from 'react'

const UsersTable = () => {

  const [users,setUsers] = useState([])
  const token = localStorage.getItem("jwt")
  const[search, setSearch] = useState()
  console.log(users)

  useEffect(() => {
      
    fetch('https://whispering-hollows-91695.herokuapp.com/users',{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setUsers(data))
    console.log(users);
  }, [])

  const handleSearch = ()=>{
    return users.filter((user)=>{  
      console.log(user); 
        if (!search) return users
        else
       return user.name.toLowerCase().includes(search)
    })
}



  const displayAllUsers = handleSearch().map((user)=> {

    return(
      <tr key={user.id}  className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
        {/* Name Section */}
        <td key={user.name} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
        {/* Email Section */}
        <td key={user.email} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {user.email}
        </td>
        
        {/* Role Section */}
        <td key={user.role} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {user.role}
        </td>
      
    </tr>
    )
  })
  return (
    <div className="flex flex-col bg-white m-7 rounded-2xl drop-shadow-md p-3">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
          <div className="flex justify-start">
        <div className="mb-3 xl:w-96">
          <input
            type="search"
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded-2xl
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="search"
            placeholder="Search User..."
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
    </div>
            <table className="min-w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Email
                  </th>
                  
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Display all Users Section */}
                {displayAllUsers}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersTable