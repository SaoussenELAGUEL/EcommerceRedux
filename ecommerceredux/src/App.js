import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import Listarticles from './components/articles/Listarticles';

import Editarticles from './components/articles/Editarticles';

import Listcategories from './components/categories/Listcategories';



import Listscategories from './components/scategories/Listscategories';

import Inserarticles from './components/articles/Inserarticles';
import Editcategories from './components/categories/Editcategories';
import Insertcategories from './components/categories/Insertcategories';
import Insertscategories from './components/scategories/Insertscategories';

import Menu from './Menu';
import Editscategories from './components/scategories/Editscategories';
function App() {
  return (
   <Router>
   <Menu/>
   <Routes>
    <Route path="/listarticles" element={<Listarticles/>}/>
    <Route path="/insertarticles" element={<Inserarticles/>}/>
    <Route path="/editarticles/:id" element={<Editarticles/>}/>
  
    <Route path="/listcategories" element={<Listcategories/>}/>
    <Route path="/insertcategories" element={<Insertcategories/>}/>
    <Route path="/editcategories/:id" element={<Editcategories/>}/>
  

    <Route path="/listscategories" element={<Listscategories/>}/>
    <Route path="/insertscategories" element={<Insertscategories/>}/>
    <Route path="/editscategories/:id" element={<Editscategories/>}/>
  
    </Routes> 
   </Router>

 
  );
}

export default App;

