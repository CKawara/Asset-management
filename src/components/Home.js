import NavBar from './NavBar';
import RequestAsset from './RequestAsset';
import UserAssetsTable from './UserAssetsTable';

const Home = () => {
    return (
      <div className="min-h-screen">
          <NavBar/>
        <div className="relative flex flex-wrap items-center justify-between px-5">
          <p className="text-2xl">Assets Available</p>
          <RequestAsset />
          </div>
        <hr/>
        <UserAssetsTable />
      </div>
    );
}

export default Home