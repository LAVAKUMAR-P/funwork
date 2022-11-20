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
import { SET_ALL_PICTURES } from './redux/action/PictureAction';
import { SampleData } from './DevData/ConfigData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [Menu, setMenu] = useState(false);
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(SET_ALL_PICTURES(SampleData))
  }, [])

  return (
    <>
      <Router>
        <ToastContainer position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
        <Header />
        {Menu && <PopUPMenu setMenu={setMenu} Menu={Menu} />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Images' element={<PageOne />} />
          <Route path='/board' element={<PageTwo />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>
        <Rotate setMenu={setMenu} Menu={Menu} />
        <MobileMenu />
        <Footer />
      </Router>
    </>
  );
}

export default App;
