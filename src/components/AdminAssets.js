import React from 'react'
import AssetsTableAdm from './AssetsTableAdm'
import AssetRequest from './AssetRequest'
import NavBar from './NavBar';

const AdminAssets = () => {
  

    return (
      <div className="min-h-screen">
          <NavBar/>
        <div className="relative flex flex-wrap items-center justify-between px-5">
          <p className="text-2xl">Assets Available</p>
          <AssetRequest />
        </div>
        <hr/>
        <AssetsTableAdm />
      </div>
    );
}

export default AdminAssets