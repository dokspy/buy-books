import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPanel from './components/main/MainPanel/MainPanel';
import { Login } from './components/login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/main' element={<Main />}/>
          <Route  path='/' element={(<Main />)} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
