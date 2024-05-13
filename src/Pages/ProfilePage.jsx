import  { Suspense, lazy } from 'react';
import MainLayOut from '../LayOut/MainLayOut';
import Loder from '../Components/Loder';
const  Profile = lazy (()=> import('../Components/Profile'))

const ProfilePage = () => {
  return (
    <div>
      <MainLayOut>
        <Suspense fallback={<Loder></Loder>}>
          <Profile></Profile>
        </Suspense>
      </MainLayOut>
    </div>
  );
};

export default ProfilePage;