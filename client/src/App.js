import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/landingpage/landing.js';
import Home from './components/homepage/home.js';
import Detail from './components/detailpage/detail.js';
import Form from './components/formpage/form.js';

function App() {
  return (
      <Routes>
        <Route exact path = '/' element= {<LandingPage/>} />
        <Route path = '/home' element= {<Home/>} />
        <Route path='/home/:id' element= {<Detail/>} />
        <Route path= '/create' element = {<Form/>} />
      </Routes>
  );
}

export default App;
