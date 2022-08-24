import React from 'react'
import AssetsTable from './AssetsTable'
import AssetRequest from './AssetRequest'

const Home = () => {
    return (
      <div className="min-h-screen">
        <div className="relative flex flex-wrap items-center justify-between px-5">
          <p className="text-2xl">Assets Available</p>
          <AssetRequest />
        </div>
        <hr/>
        <AssetsTable />
      </div>
    );
}

export default Home
