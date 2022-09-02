import React, { useContext, useState } from 'react'
import { UserContext } from '../custom-hooks/user';

const RequestAsset = ({item}) => {
    const [showModal, setShowModal] = useState(false);

    const [name,setName] = useState("")
    const [urgency,setUrgency] = useState("")
    const [quantity,setQuantity] = useState("")
    const [reason,setReason] = useState("")
    const {user} = useContext(UserContext)


    const handleSubmit = (e)=>{
        e.preventDefault()

        const request = {
            name: name,
            urgency: urgency,
            quantity: quantity,
            reason: reason,
            user_id: user.id

        }


        fetch('https://whispering-hollows-91695.herokuapp.com/requests',{
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .then(res => res.json())
        .then(data=> console.log(data.message))
        setShowModal(false)

        
    }









    return (
    <>
        <button type="button" className="inline-block px-6 py-2.5 bg-emerald-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => setShowModal(true)}
        >
        Request Asset
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
                    <form onSubmit={handleSubmit} >
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <label for="asset" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asset</label>
                            <select value={name} onChange={(e)=> setName(e.target.value)} id="asset" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Asset</option>
                                <option value="Hp15">Hp15</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Car">Car</option>
                            </select>

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
                            // onClick={() => setShowModal(false)}
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
    </>
    );
}

export default RequestAsset