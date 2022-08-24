import React from "react";
import AssetsTable from "./AssetsTableAdm";
import '../index.css'
import AddAssets from "./AddAssets";
import NavBar from "./NavBar";

const ManagerAssets = () => {
	return (
		<div className="min-h-screen">
			<NavBar/>
				<div className='relative flex flex-wrap items-center justify-between px-5'>
					<p className='text-2xl'>Assets Available</p>
					<AddAssets/>
				</div>
			<hr />
			<AssetsTable />
		</div>
	);
};

export default ManagerAssets;
