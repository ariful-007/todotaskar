import  { Suspense, lazy } from 'react';
import MainLayOut from '../LayOut/MainLayOut';
import Loder from '../Components/Loder';
const ComplatedTodo = lazy(()=>import('../Components/ComplatedTodo'))

const ComplatedTodoPage = () => {
  return (
    <div>
      <MainLayOut>
        <Suspense fallback={<Loder></Loder>}>
          <ComplatedTodo></ComplatedTodo>
        </Suspense>
      </MainLayOut>
    </div>
  );
};

export default ComplatedTodoPage;