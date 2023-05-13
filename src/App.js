import './App.css';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './components/login/Login';
import { Signup } from './components/signup/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/main' element={<Main />}/>
          <Route  path='/' element={(<Main />)} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
