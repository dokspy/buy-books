import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
