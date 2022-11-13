import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Rotate from './Components/RotateDiv/Rotate';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='*' element={<ErrorPage/>}/>
       
    </Routes>
    <Rotate/>
    <MobileMenu/>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
