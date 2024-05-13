import { Suspense, lazy } from 'react';
import MainLayOut from '../LayOut/MainLayOut';
import Loder from '../Components/Loder';
const NewTodo = lazy(()=> import ('../Components/NewTodo')) 

const NewTodoPage = () => {
  return (
    <div>
      <MainLayOut>
        <Suspense fallback={<Loder></Loder>}>
          <NewTodo></NewTodo>
        </Suspense>
      </MainLayOut>
    </div>
  );
};

export default NewTodoPage;