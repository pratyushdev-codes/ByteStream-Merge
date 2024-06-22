import logo from './logo.svg';
import './App.css';
import { Outlet, useNavigate, Navigate, BrowserRouter, Route, Router,useLocation, Routes } from 'react-router-dom';
import { Home, Login, Profile, Register, ResetPassword } from './Pages';


function Layout(){
  const user = null;
   const location = null;

   return user?.token?(
    <Outlet/>
   ):(
    <Navigate to="/login" state={{from: location}} replace/>
   )
}



function App() {
  return (
    <div className="w-full min-h-[100vh]">
      <p className='text-blue'>Hello word</p>
      <Routes>

        {/* Layout */}
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile/:id?' element={<Profile/>}/>
        </Route>


      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile/:id?' element={<ResetPassword/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
