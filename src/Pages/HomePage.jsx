
import MainLayOut from '../LayOut/MainLayOut';
import { Suspense, lazy } from 'react';
import Loder from '../Components/Loder';
const Home = lazy(() => import('../Components/Home'));


const HomePage = () => {
  return (
    <MainLayOut>
      <Suspense fallback={<Loder></Loder>}>
      <Home></Home>
      </Suspense>
    </MainLayOut>
  );
};

export default HomePage;