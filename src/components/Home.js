import AssetRequest from './AssetRequest'
import NavBar from './NavBar';
import UserAssetsTable from './UserAssetsTable';

const Home = () => {
    return (
      <div className="min-h-screen">
          <NavBar/>
        <div className="relative flex flex-wrap items-center justify-between px-5">
          <p className="text-2xl">Assets Available</p>
          <AssetRequest />
          </div>
        <hr/>
        <UserAssetsTable />
      </div>
    );
}

export default Home