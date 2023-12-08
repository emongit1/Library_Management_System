
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';  
import Home from './Components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Settings from './Components/Settings';
import History from './Components/History';
import Admin from './Components/Admin';
import AddUser from './Components/AddUser'; 
import ManageUser from './Components/ManageUser';
import Reports from './Components/Reports';
import ManageBooks from './Components/ManageBooks';



function App() {
  return (
   
    <Router>
      <Routes>
      
        <Route path='/'element={<Login />} />
        <Route path='/signUp'element={<SignUp />} />
        <Route path='/home' element ={<Home/>}/>
        <Route path='/settings' element={<Settings />} /> 
        <Route path='/history' element={ <History /> } /> 
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/adduser' element={<AddUser />} />
        <Route path='/admin/manageuser' element={<ManageUser />} />
        <Route path='/admin/reports' element={<Reports />} />
        <Route path='/admin/managebokks' element={<ManageBooks />} />

       
      </Routes>
    </Router>
   
  );
}

export default App;




