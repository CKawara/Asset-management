import React, { useEffect, useState } from 'react'
import Req from './Req'

const RequestsTable = () => {

    const [requests, setRequests] = useState([])
    const token = localStorage.getItem("jwt")
    const [myFilter, setMyfileter] = useState("");
  
      useEffect(() => {
        
        fetch('https://whispering-hollows-91695.herokuapp.com/requests',{
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => setRequests(data))
      }, [])

      const filteredReuests = requests.filter((req) => {
        if (myFilter === "") {
          return true;
        } else {
          return req.name.toLowerCase().search(myFilter) >= 0;
        }
      });


   const mappeReq = filteredReuests.map(request => (<Req props = {request} key = {request.id}/>))



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
                onChange={(e)=>setMyfileter(e.target.value)}
                value= {myFilter}

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
                       mappeReq
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