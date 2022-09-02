import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../custom-hooks/user'

const UserTable = () => {
  const {user} = useContext(UserContext)
  const[search, setSearch] = useState()
  const [requests, setRequests] = useState([])
  const token = localStorage.getItem('jwt')

  useEffect(() => {

    fetch("https://whispering-hollows-91695.herokuapp.com/requests", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => setRequests(r));
      }
    });

  }, [])
  console.log(requests);

  const handleSearch = ()=>{
    return requests.filter((request)=>{  
        if (!search) return user.requests
        else
       return request.name.toLowerCase().includes(search)
    })
}


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
      placeholder="Search asset"
    />
  </div>
</div>
        <table className="min-w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Asset id
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Home
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Category
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Quantity
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Urgency
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
          {
               (user) ? 
                handleSearch().map((asset)=>{
                  return(
                    <tr key={asset.id} className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.id}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {asset.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {asset.category}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {asset.quantity}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {asset.urgency}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {asset.status}
                    </td>
                  </tr>
                  )
                })
              :
            null
            }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>  )
}

export default UserTable