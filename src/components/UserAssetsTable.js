import React, { useContext, useState } from 'react'
import { useEffect, useRef } from 'react';
// import consumer from './consumer.js'
// import RequestAsset from './RequestAsset.js';
// import RequestsChannel from './requests_channel.js'

import { UserContext } from '../custom-hooks/user'


const UserAssetsTable = () => {
  const {user} = useContext(UserContext)
  const [assets,setAssets] = useState([])
  const [showModal, setShowModal] = useState(false);

  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  // const [received,setReceived] = useState([])
  const [urgency,setUrgency] = useState("")
  const [quantity,setQuantity] = useState("")
  const [reason,setReason] = useState("")
  const [assetId, setAssetId] = useState("")
  const token = localStorage.getItem("jwt")
  const[search, setSearch] = useState()





  // Broadcast form socket
   useEffect(() => {
    // RequestsChannel.received = (data) => 
    // console.log("am the user requestiing",data)
    
    // setReceived(data)


  
  }, [])


    const handleSubmit = (e)=>{
        e.preventDefault()

        const request = {
          name: name,
          category:category,
          urgency: urgency,
          quantity: parseInt(quantity),
          // reason: reason,
          asset_id: parseInt(assetId),
          user_id: parseInt(user.id),
          status: "Pending"
          // user_id: user_id

          // name: "Hp",
          // category: "Laptop",
          // urgency: "high",
          // user_id: 4,
          // asset_id: 5,
          // quantity: 1,
          // status: "pending",
        };

        console.log(request);


        fetch('https://whispering-hollows-91695.herokuapp.com/requests',{
            method: 'POST',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(request)
        })
        .then(res => res.json())
        .then(data=> console.log(data.message))
        setName("")
        setCategory("")
        setUrgency("")
        setQuantity("")
        setReason("")
        setAssetId("")

        setShowModal(false)


        
    }


  useEffect(() =>{
    fetch("https://whispering-hollows-91695.herokuapp.com/assets",{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setAssets(data))
    // .then(data => setAssets(data))
  },[])


  
  const buttonOnClick = (e)=>{
    setShowModal(true)
    setAssetId(e.target.parentElement.parentElement.childNodes[0].id)
    setName(e.target.parentElement.parentElement.childNodes[1].id)
    setCategory(e.target.parentElement.parentElement.childNodes[2].id)
  }
  const handleSearch = ()=>{
    return assets.filter((asset)=>{  
        if (!search) return assets
        else
       return asset.name.toLowerCase().includes(search)
    })
}



  const mappedData = handleSearch().map((asset)=>{

    return(

    <tr key={asset.id} className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td id={asset.id} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {asset.id}
    </td>
    <td id={asset.name} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {asset.name}
    </td>
    <td id={asset.category}  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {asset.category}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {asset.description}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <button type="button" className="inline-block px-6 py-2.5 bg-emerald-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          onClick={buttonOnClick}
          >
          Request Asset
          </button>
      </td> 

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
                    Request for a Asset
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
                    <form >
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <label for="asset" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asset ID</label>
                            <input  number value={assetId} id="id" name='id' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                                
                            

                            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">quantity</label>
                            <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} type="number" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Quantity" required/>

                            <label for="urgency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Urgency</label>
                            <select value={urgency} onChange={(e)=> setUrgency(e.target.value)} id="urgency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Urgency</option>
                                <option value="Not Urgent">Not Urgent</option>
                                <option value="Urgent">Urgent</option>
                            </select>

                            <label for="reason" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reason</label>
                            <textarea value={reason} onChange={(e)=> setReason(e.target.value)} id="reason" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your reason..." required></textarea>
                            
                        </div>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 block w-full rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            onClick={handleSubmit}
                            >
                            Request Asset
                            </button>
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

  </tr> )

    })

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
                    placeholder="Search asset..."
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
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  
                  {mappedData}


                                
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </>
  );
   }
export default UserAssetsTable