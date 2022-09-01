import { logDOM } from '@testing-library/react';
import { useContext } from 'react';
import { UserContext } from '../custom-hooks/user';
import NavBar from './NavBar';
// import RequestAsset from './RequestAsset';
import UserAssetsTable from './UserAssetsTable';

const Home = () => {
  const {user} = useContext(UserContext)
  console.log(user);
    return (
      <div className="min-h-screen">
          <NavBar/>
        <div className="relative flex flex-wrap items-center justify-between px-5">
          <p className="text-2xl">Assets Available</p>
          {/* <RequestAsset /> */}
          </div>
        <hr/>
        <UserAssetsTable />
      </div>
    );
}

export default Home