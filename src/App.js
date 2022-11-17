import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Rotate from './Components/RotateDiv/Rotate';
import { useEffect, useState } from 'react';
import PopUPMenu from './Components/PopUpMenu.js/PopUPMenu';
import Header from './Components/Header/Header';
import PageOne from './Pages/PageOne/PageOne';
import PageTwo from './Pages/PageOne/PageTwo';
import { useDispatch } from 'react-redux';


function App() {
  const [Menu, setMenu] = useState(false);
  const Dispatch=useDispatch()
  useEffect(() => {
    
  }, [])
  
  return (
   <>
   <Router>
    <Header/>
    {Menu && <PopUPMenu setMenu={setMenu} Menu={Menu}/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Images' element={<PageOne/>}/>
      <Route path='/board' element={<PageTwo/>}/>
      <Route path='*' element={<ErrorPage/>}/>
       
    </Routes>
    <Rotate setMenu={setMenu} Menu={Menu}/>
    <MobileMenu/>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
