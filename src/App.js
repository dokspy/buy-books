import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
