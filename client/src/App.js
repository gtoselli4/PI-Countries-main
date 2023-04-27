import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/landingpage/landing.js';
import Home from './components/homepage/home.js';
import Detail from './components/detailpage/detail.js';
import Form from './components/formpage/form.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' element= {<LandingPage/>} />
        <Route path = '/home' element= {<Home/>} />
        <Route path='/home/:id' element= {<Detail/>} />
        <Route path= '/create' element = {<Form/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
