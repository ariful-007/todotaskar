
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistationPage from './Pages/RegistationPage';
import CencelTodoPage from './Pages/CencelTodoPage';
import ComplatedTodoPage from './Pages/ComplatedTodoPage';
import CreateTodoPage from './Pages/CreateTodoPage';
import NewPasswordPage from './Pages/NewPasswordPage';
import ProgressTodoPage from './Pages/ProgressTodoPage';
import ProfilePage from './Pages/ProfilePage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import OtpVerifyPage from './Pages/OtpVerifyPage';
import Page404 from './Pages/Page404';
import NewTodoPage from './Pages/NewTodoPage';
import { getAuthToken } from './Helper/SessionHepler';


function App() {

  if(getAuthToken()){
    return(
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/cencel-todo' element={<CencelTodoPage></CencelTodoPage>}></Route>
          <Route path='/complated-todo' element={<ComplatedTodoPage></ComplatedTodoPage>}></Route>
          <Route path='/create-todo' element={<CreateTodoPage></CreateTodoPage>}></Route>
          <Route path='/new-todo' element={<NewTodoPage></NewTodoPage>}></Route>
          <Route path='/progress-todo' element={<ProgressTodoPage></ProgressTodoPage>}></Route>
          <Route path='/profile' element={<ProfilePage></ProfilePage>}></Route>


          <Route path='/login' element={ <Navigate to="/" replace ></Navigate> }></Route>

          <Route path='*' element={<Page404></Page404>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
  }
  else{
    return(
      <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/registation' element={<RegistationPage></RegistationPage>}></Route>
          <Route path='/create-new-password' element={<NewPasswordPage></NewPasswordPage>}></Route>
          <Route path='/otp-verify' element={<OtpVerifyPage></OtpVerifyPage>}></Route>
          <Route path='/forgot-password' element={<ForgotPasswordPage></ForgotPasswordPage>}></Route>

          <Route path='/' element={ <Navigate to="/login" replace ></Navigate> }></Route>
          <Route path='*' element={<Page404></Page404>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
    )
  }
}

export default App


