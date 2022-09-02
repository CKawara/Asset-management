import React, { useEffect, useState } from 'react'

const AssetsTableAdm = () => {
  const [assets,setAssets] = useState([])
  const token = localStorage.getItem("jwt")
  const[search, setSearch] = useState()



  useEffect(() =>{
    fetch("https://whispering-hollows-91695.herokuapp.com/assets",{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setAssets(data))
  },[])

  const handleSearch = ()=>{
    if (assets){
      return assets.filter((asset)=>{  
        if (!search) return assets
        else
       return asset.name.toLowerCase().includes(search)
    })
    }

}
console.log(handleSearch().map((asset)=> asset.user))

  return (
    <>
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
                    onChange={(e)=>setSearch(e.target.value)}

                  />
                </div>
              </div>
              <table className="min-w-full">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Asset id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Description
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Owner
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    handleSearch().map((asset)=>{
                      return(
                        <tr key={asset.id} className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {asset.id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {asset.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {asset.category}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {asset.description}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {(asset.user)? asset.user.name : null}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {(asset.status)? "Allocated" : "Not Allocated"}
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
    </>
  );
   }
export default AssetsTableAdm