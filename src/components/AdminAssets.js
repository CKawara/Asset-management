import React from 'react'
import AssetsTableAdm from './AssetsTableAdm'
import SideBar from './SideBar';
import RequestAsset from './RequestAsset';
import { useState } from 'react';
import consumer from './consumer';






const AdminAssets = () => {

	const [newAssets,setNewAssets] = useState([])
	// Testing channel and websocket
    consumer.subscriptions.create({ channel: "AssetsChannel"},{
		received(data){
			setNewAssets(data)

			// console.log(data)

		}
	})

	// const chatChannel = consumer.subscriptions.create({ channel: "ChatChannel", room: "Best Room" }, {
	// 	received(data) {
	// 	  // data => { sent_by: "Paul", body: "This is a cool chat app." }
	// 	}
	//   }
	  
	//   chatChannel.send({ sent_by: "Paul", body: "This is a cool chat app." })
    
      









  return (
		<div className="min-h-screen">
			<nav className="relative flex flex-wrap shadow-md">
				<div className="container mx-auto flex flex-wrap ">
					<div className="w-full relative flex lg:w-auto lg:static flex ">
						<p className= "py-2 flex text-2xl uppercase font-bold leading-snug text-dark " >E-nventory</p>
					</div>
				</div>
			</nav>
			<div className='grid grid-cols-12'> 
				<SideBar/>
				<div className='col-span-9  min-h-screen pl-2 md:col-span-10'>
					<div className="relative flex flex-wrap items-center justify-between py-3 px-5">
						<p className="text-2xl">Assets Available</p>
						<RequestAsset />
					</div>
					<hr/>
					<AssetsTableAdm />

					<p>Display assets cable Test  here</p>
					<p>This is the new Asset</p>
					<ul>
						<li>{newAssets.name}</li>
						<li>{newAssets.category}</li>
						<li>{newAssets.description}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AdminAssets