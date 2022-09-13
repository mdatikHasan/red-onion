import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Banner from './Pages/Banner/Banner';
import Home from './Pages/Home/Home';
import BreakFast from './Pages/Foods/BreakFast/BreakFast';
import Lunch from './Pages/Foods/Lunch/Lunch';
import Dinner from './Pages/Foods/Dinner/Dinner';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/breakfast' element={<BreakFast></BreakFast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Footer></Footer>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
