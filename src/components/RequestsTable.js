import React, { useEffect, useState } from 'react'

const RequestsTable = () => {

    const [requests,setRequests] = useState([])
    const token = localStorage.getItem("jwt")
    const[search, setSearch] = useState()
  
  
      useEffect(() => {
        
        fetch('http://127.0.0.1:3000/requests',{
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => setRequests(data))
      }, [])

      const handleApprove = ()=>{
        fetch('http://127.0.0.1:3000/requests',{
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({})

          })
          .then(res => res.json())
          .then(data => setRequests(data))
          alert('approved')
      }
      const handleRejected = ()=>{
        alert('rejected')
    }
    const handleSearch = ()=>{
        return requests.filter((request)=>{  
            if (!search) return requests
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
                placeholder="Search request..."
                onChange={(e)=>setSearch(e.target.value)}

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
                        Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Category
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Owner
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
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Approve
                    </th>
                    </tr>
                </thead>
                <tbody>
                   {
                       handleSearch().map((request)=>{
                           return(
                            <tr key={request.id} className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.asset_id}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {request.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {request.category}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {request.user.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {request.quantity}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {request.urgency}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {request.status}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <button onClick={handleApprove} className='hover:bg-gray-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2CAE66"  className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l6.785 6.785A48.1 48.1 0 0121 4.143" />
                                    </svg>
                                </button>
                                <button onClick={handleRejected} className='hover:bg-gray-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
                                    </svg>
                                </button>
                            </td>
                            </tr>
                           )
                       })
                   }
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>  
    )
}

export default RequestsTable