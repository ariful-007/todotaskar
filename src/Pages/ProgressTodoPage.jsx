import  { Suspense, lazy } from 'react';
import MainLayOut from '../LayOut/MainLayOut';
import Loder from '../Components/Loder';
const ProgressTodo = lazy(()=> import('../Components/ProgressTodo'));

const ProgressTodoPage = () => {
  return (
    <div>
      <MainLayOut>
        <Suspense fallback={<Loder></Loder>}>
          <ProgressTodo></ProgressTodo>
        </Suspense>
      </MainLayOut>
    </div>
  );
};

export default ProgressTodoPage;