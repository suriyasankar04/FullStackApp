
import './App.css';
import Login from './components/login';
import Signuppage from './components/signuppage';
import Landingpage from './components/landingpage';
import {Link,Routes,BrowserRouter,Route} from "react-router-dom";
import Amazon from './components/amazon';
import { useState } from 'react';
import axios from 'axios';
import Company from './components/company';
import EditCompany from './components/EditCompany';
import LoginDelete from './components/LoginDelete';
import AboutUs from './components/about';
function App() {


  return (
<BrowserRouter>
<Routes>
          <Route  index element={<Landingpage />}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/delete/:id" element={<LoginDelete/>}/>
          <Route path="Oct" element={<Signuppage />} />
          <Route path="about" element={<AboutUs />}/>
          <Route exact path="/Amazon/:id" element={<Amazon />}/>
          <Route path="Details" element={<Company/>}/>
          <Route exact path="/update/:id" element={<EditCompany />}/>
        
</Routes>
</BrowserRouter>
  
  );
}

export default App;
