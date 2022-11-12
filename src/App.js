import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='*' element={<ErrorPage/>}/>
       
    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
