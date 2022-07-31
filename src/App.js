import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>

      </Routes>

    </div>
  );
}

export default App;
