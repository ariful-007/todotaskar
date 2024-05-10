import  { Suspense, lazy,  } from 'react';
import MainLayOut from '../LayOut/MainLayOut';
import Loder from '../Components/Loder';
const CreateTodo = lazy(() => import('../Components/CreateTodo'))


const CreateTodoPage = () => {
  return (
    <div>
      <MainLayOut>
        <Suspense fallback={<Loder></Loder>}>
          <CreateTodo></CreateTodo>
        </Suspense>
      </MainLayOut>
    </div>
  );
};

export default CreateTodoPage;