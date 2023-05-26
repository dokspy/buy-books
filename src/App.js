import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './components/login/Login';
import { Signup } from './components/signup/Signup';
import { Profile } from './components/Profile/Profile';
import { Footer } from './components/Footer/Footer';
import { BookInfo } from './components/BookInfo/BookInfo.jsx';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='tes'>
      <Header />
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/' element={(<Main />)} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/bookinfo' element={<BookInfo />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
