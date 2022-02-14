
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbars from'./components/Navbars';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Profile from './components/profile';
import Privateroute from './components/Privateroute';
import Aboutus from './components/aboutus';
import Admin from './components/admin';
import Listusers from './components/Listusers';
import ListProduct from './components/Listproduct';
import Footer from './components/footer';
import Panier from './components/panier';

function App() {
 
  return (
    <div>
     <Navbars></Navbars>
 
     <Routes>
       
    <Route path="/" element={<Home></Home>}></Route>
     <Route path="/signUp"element ={<SignUp/>}/>
     <Route path="/signIn"element ={<SignIn/>}/>
     <Route path="/Profile"element ={ <Privateroute><Profile/></Privateroute>}/>
     <Route path='/aboutus' element={<Aboutus></Aboutus>}/>
     <Route path='/Admin' element={<Admin/>}/>
     <Route path='/listproduct' element={<ListProduct/>}/>
     <Route path='/users' element={<Listusers/>}/>
    <Route path='/shoppingCard' element={<Panier/>}></Route>
     </Routes>
  
  <div> <Footer/></div>

 
    </div>
  );
}

export default App;
