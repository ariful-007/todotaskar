import  { Suspense, lazy } from 'react';
import MainLayOut from '../LayOut/MainLayOut';
import Loder from '../Components/Loder';
const CencelTodo = lazy(()=> import('../Components/CencelTodo'))


const CencelTodoPage = () => {
  return (
    <div>
      <MainLayOut>
        <Suspense fallback={<Loder></Loder>}>
          <CencelTodo></CencelTodo>
        </Suspense>
      </MainLayOut>
    </div>
  );
};

export default CencelTodoPage;