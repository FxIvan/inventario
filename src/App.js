import React from 'react'
import {Mongo} from './component/mongoDB/mongo'
import {BrowserRouter, Routes , Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mongo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
